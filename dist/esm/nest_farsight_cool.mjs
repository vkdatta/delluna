export const name="nest_farsight_cool";
export const id="dl_b3f158d3744250b29219";
export const url=new URL("../icons/nest_farsight_cool.svg?v=ba154330d2d5529422f332f98fa9ed8f8bdbb62945a32adefee7dbd332381a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
