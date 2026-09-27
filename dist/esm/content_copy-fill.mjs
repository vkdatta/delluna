export const name="content_copy-fill";
export const id="dl_404cdccc87a52eb6558e";
export const url=new URL("../icons/content_copy-fill.svg?v=351f61fe998f8efb482baf509aa2ce91211ba5d3c886746d8d427f1b3acb7716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
