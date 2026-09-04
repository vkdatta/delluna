export const name="lastfm-logo-bold";
export const id="dl_99829e5a865d491f932b";
export const url=new URL("../../icons/L/lastfm-logo-bold.svg?v=2532443074498173ac99ffe65af9d76af65c560ac6974b708cdd82006a71b597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
