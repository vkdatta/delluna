export const name="film-slate-bold";
export const id="dl_9d4c1480eb1e46969d3d";
export const url=new URL("../icons/film-slate-bold.svg?v=e12635f6b6c0520e3221e328c8b8281db3832e05cc554981115cc3636389e482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
