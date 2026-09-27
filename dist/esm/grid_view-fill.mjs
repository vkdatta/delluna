export const name="grid_view-fill";
export const id="dl_eb4f46cf42692aa9125f";
export const url=new URL("../icons/grid_view-fill.svg?v=c420a9c1868294e2bd2474aaedf12b7ffe527eebfb2508b94b61dab1f2a25c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
