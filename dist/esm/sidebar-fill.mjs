export const name="sidebar-fill";
export const id="dl_f8c67a1d15ddb777032e";
export const url=new URL("../icons/sidebar-fill.svg?v=b7ca3c3903d3f116a7eb2686878ef1f48f7133bc4db229c7c552f3cd2f8d6163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
