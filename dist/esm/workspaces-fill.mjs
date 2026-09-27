export const name="workspaces-fill";
export const id="dl_6edced2c0f854fb09a05";
export const url=new URL("../icons/workspaces-fill.svg?v=e764968806ce1348d7225ca9d343beffc2d1c7a4ad972e1f0f19f61417474c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
