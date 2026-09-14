export const name="arrow_or_edge";
export const id="dl_f8a5e9e252294c9f8993";
export const url=new URL("../icons/A/arrow_or_edge.svg?v=8e2d31865c0ff4f4f09c0401adf254902563702f1c1424009c9d8381cdfcb482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
