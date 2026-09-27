export const name="format_list_numbered-fill";
export const id="dl_b6f107f9f54c6f2312b2";
export const url=new URL("../icons/format_list_numbered-fill.svg?v=4ef4d377fa873b55008db86b7ca49bbf6b0ad9c557d3f7199e2ea56169afda34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
