export const name="user-circle-dashed-fill";
export const id="dl_7d853d66ad9dc5ab18f5";
export const url=new URL("../icons/user-circle-dashed-fill.svg?v=ef941690632d3e91b544b9ac641b939c3596fbb32c2563dabc5921dd30a4df62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
