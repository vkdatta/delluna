export const name="map-trifold";
export const id="dl_e38b0291592c40dc977e";
export const url=new URL("../icons/map-trifold.svg?v=4102c9e7eb382e063d2e7c77abd5ba5501e6584e20b79871627956d076d3a7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
