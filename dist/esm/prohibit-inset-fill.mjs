export const name="prohibit-inset-fill";
export const id="dl_777ddee3ae34479cafeb";
export const url=new URL("../icons/prohibit-inset-fill.svg?v=cc31d3d66d24ef924c7ec76913be3b048c6847f66cb46e2940a766ec3181971e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
