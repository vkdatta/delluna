export const name="empty-fill";
export const id="dl_5d7e7df76cb04e579ca3";
export const url=new URL("../icons/empty-fill.svg?v=68c110dd2a5b3d4d4b17a75237628f7d25855b79a3d3ae60729e366336ebf320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
