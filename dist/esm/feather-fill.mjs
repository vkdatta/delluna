export const name="feather-fill";
export const id="dl_c3093b64334b44f387cd";
export const url=new URL("../icons/feather-fill.svg?v=097718834e85b8895452d4a157a3fd2ea52ac4cba5aa21d0bf8ee0603b2007d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
