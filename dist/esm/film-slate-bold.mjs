export const name="film-slate-bold";
export const id="dl_9d4c1480eb1e46969d3d";
export const url=new URL("../icons/film-slate-bold.svg?v=a5d3c52ec0f0b00328d0a96236dba48fa115daa9d7190aeefb03fec5ddf0a60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
