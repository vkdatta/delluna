export const name="storm-fill";
export const id="dl_78bee84e9c62c48c40b2";
export const url=new URL("../icons/storm-fill.svg?v=d83100bf4069ac1efd57d1e12c12390b8b8b83c876c776f7fec6c93c46a614bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
