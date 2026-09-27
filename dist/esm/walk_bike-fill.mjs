export const name="walk_bike-fill";
export const id="dl_1312d3eea7fb00819347";
export const url=new URL("../icons/walk_bike-fill.svg?v=ade63204dd05902c2267c7726c4ccfb2daa8468fe70fa4d25845ac4812549e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
