export const name="arrow_or_edge";
export const id="dl_80471e9476f35153b8b3";
export const url=new URL("../icons/arrow_or_edge.svg?v=8e2d31865c0ff4f4f09c0401adf254902563702f1c1424009c9d8381cdfcb482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
