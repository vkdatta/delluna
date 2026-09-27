export const name="rectangle-dashed";
export const id="dl_11c43eb26011487e965a";
export const url=new URL("../icons/rectangle-dashed.svg?v=880a5192f7698dfd1af6c4dc4135dd2ae48157ee51b0ca875fd141226bce3036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
