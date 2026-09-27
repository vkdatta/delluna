export const name="layout-duotone";
export const id="dl_338697087ea8477cadcb";
export const url=new URL("../icons/layout-duotone.svg?v=6378f32ccee1d1ce959c0fb94dd16b2cf4e2f72781d7a39afd29fb7da622272a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
