export const name="square-plus";
export const id="dl_ff975f123c664860871d";
export const url=new URL("../icons/square-plus.svg?v=21e14781de73ca90b79d407160e30245dfeccca10f1e404f972094e0018bd5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
