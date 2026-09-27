export const name="table_view-fill";
export const id="dl_ba0d796ff41a977b2d87";
export const url=new URL("../icons/table_view-fill.svg?v=05c844bafa4cdf550a66b4f7dbf7899b3f17fd38541cd948d4ee7c725a7b32cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
