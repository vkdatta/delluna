export const name="lucid_3-map-plus";
export const id="dl_711b4c2343354e569e19";
export const url=new URL("../icons/lucid_3-map-plus.svg?v=c33682c37951752247fbefc31ad341d76c48c1ebab464156e1828a19ea891a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
