export const name="counter_6-fill";
export const id="dl_5b70d73b3d913e2f81b3";
export const url=new URL("../icons/counter_6-fill.svg?v=6982e6ba42a65f4fe1fd6eacd41720820bcb14ec9c780e39313a5db0c5bb7227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
