export const name="caret-left";
export const id="dl_ee247daf147e4fc9803a";
export const url=new URL("../icons/caret-left.svg?v=b52633d4199266179448b902ec03f91f6f5ad2268ab38ca2d18990964819f93b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
