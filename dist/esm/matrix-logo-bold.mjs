export const name="matrix-logo-bold";
export const id="dl_7895658c39c94313b93d";
export const url=new URL("../icons/matrix-logo-bold.svg?v=556dfe5277bd3f6bbd708c1b769a1ffb48a3469c028547f49685d3329884b2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
