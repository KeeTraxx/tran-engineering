<script lang="ts">
  import * as moment from "moment";
  import { RouteApi, type RouteSearchResponses } from "../../../gen/timetable";

  const routeApi = new RouteApi();
  let response: RouteSearchResponses;
  let itinaries;
  let showHelp;

  export let content;
  (async () => {
    const { from, to } = content;
    if (!from || !to) {
      showHelp = true;
      return;
    }
    response = await routeApi.routeGet(content);
    console.log(response);
    itinaries = response.connections.map((c) => {
      const itinary = c.legs.slice(1).reduce(
        (it, leg) => {
          const previous = it[it.length-1];
          console.log(leg);
          if (!leg.exit) {
            return it;
          }
          return [
            ...it,
            {
              from: previous.to,
              departure: moment(leg.exit.arrival).subtract(leg.runningtime, 'seconds'),
              to: leg.exit.name,
              arrival: leg.exit.arrival,
              line: leg.line,
              number: leg.number,
              runningtime: leg.runningtime,
              stops: leg.stops,
              terminal: leg.terminal,
              track: leg.track,
              type: leg.type,
            },
          ];
        },
        [
          {
            from: c.from,
            departure: moment(c.departure),
            to: c.legs[0].exit.name,
            arrival: c.legs[0].exit.arrival,
            line: c.legs[0].line,
            number: c.legs[0].number,
            runningtime: c.legs[0].runningtime,
            stops: c.legs[0].stops,
            terminal: c.legs[0].terminal,
            track: c.legs[0].track,
            type: c.legs[0].type,
          },
        ]
      );
      return itinary;
    });
    console.log(itinaries)
  })();
</script>

{#if showHelp}
  <pre>Usage: sbb from to [time]
Example: sbb Bern Zürich 14:42

</pre>
{:else if response}
  <table>
    <thead>
      <th>Time</th>
      <th />
      <th colspan="256">Description</th>
    </thead>
    <tbody>
      {#each response.connections as connection}
        <tr>
          <td>
            {moment(new Date(connection.departure)).format("HH:MM")}
            {#each connection.legs as leg}
              {leg.name} {leg.track || ""} ->
            {/each}
            {moment(new Date(connection.arrival)).format("HH:MM")}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <div>Loading connections...</div>
{/if}
