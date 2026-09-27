export const name="television-light";
export const id="dl_9305bf8d8035aabde4fd";
export const url=new URL("../icons/television-light.svg?v=7ae0160969450241e365398214ab0a20a2882c83eb911e6e935146674e7230bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
