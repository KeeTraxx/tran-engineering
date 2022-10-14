export default {
    sbb: (await import('./sbb')).default,
    about: (await import('./about')).default,
    contact: (await import('./contact')).default,
    motd: (await import('./motd')).default,
}