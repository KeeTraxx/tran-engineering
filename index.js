import jQuery from 'jquery'
import styles from 'jquery.terminal/css/jquery.terminal.css'
import styles from './css/tran-engineering.css'

window.jQuery = jQuery;
window.$ = jQuery;

var terminal = require("jquery.terminal");

console.log(terminal);

var banner = "[[g;white;black;banner]                                           _                        _             \n _                                        (_)                      (_)            \n| |_   ____ ____ ____ ___ ____ ____   ____ _ ____   ____ ____  ____ _ ____   ____ \n|  _) / ___) _  |  _ (___) _  )  _ \\ / _  | |  _ \\ / _  ) _  )/ ___) |  _ \\ / _  |\n| |__| |  ( ( | | | | | ( (/ /| | | ( ( | | | | | ( (/ ( (/ /| |   | | | | ( ( | |\n \\___)_|   \\_||_|_| |_|  \\____)_| |_|\\_|| |_|_| |_|\\____)____)_|   |_|_| |_|\\_|| |\n                                    (_____|                                (_____|]"
var banner2 = "\n\n  Available commands: [[ub;lightblue;#000;exec]about], [[ub;lightblue;#000;exec]contact], [[ub;lightblue;#000;exec]sbb]\n\n";

var t = $('body').terminal({
    about: function() {
        this.echo("\n\nTran Engineering\n\n  Software engineering, specifically for your needs. We are specialized in: \n\n - Web development (PHP, js, python, JAVA, C#.net)\n - Database support (MongoDB, Oracle, MySQL, MariaDB, Postgres)\n - Game development (Unity3D)\n");
    },
    references: function() {
        this.echo("N-Inventory, iOwn, Matheria")
    },
    contact: function(){
        this.echo('\n\nTran Engineering, Khôi Tran, Unterdorfstrasse 43, 3072 Ostermundigen\n\nkt@compile.ch\n\n+41 79 472 64 47\n\nSpoken languages: English, German, French, Vietnamese, Japanese');
    },
    sbb: function(from, to, date, time) {
        var term = this;
        if (!from) {this.echo('Usage: sbb from [to] [date] [time]'); return;};

        if ( !to ) {
            $.getJSON( 'http://transport.opendata.ch/v1/stationboard?station=' + from, function(data){
                console.log(this);
                console.log(data);
                $(data.stationboard).each( function(i,d) {
                    term.echo( sprintf( '%15s : %15s %-40s %10s', new Date(d.stop.departure).toLocaleString(), d.name, d.to, d.stop.platform ? 'platform ' + d.stop.platform : '' ) );
                });
            });
            return;
        }

        var url = sprintf('http://transport.opendata.ch/v1/connections?from=%s&to=%s&date=%s&time=%s', from, to, date ? date : '', time ? time : '');

        $.getJSON( url, function(data){
            console.log(this);
            console.log(data);
            $(data.connections).each( function(i,d) {
                term.echo( sprintf( 'Departure: %15s Type: %8s From: %s Platform: %-4s To: %s Platform: %-4s Duration: %s', new Date(d.from.departure).toLocaleString(), d.products.join(', '), d.from.station.name, d.from.platform ? d.from.platform : '', d.to.station.name, d.to.platform ? d.to.platform : '', d.duration ) );
            });
        });

    }
}, {
    prompt: 'tran-engineering > ',
    greetings: banner + banner2,
    checkArity: false
});

$(document).delegate('.exec', 'click', function(){
    console.log('cliked?');
    var $this = $(this);
    console.log($this.attr('data-text'));
    t.exec($this.attr('data-text'));
});