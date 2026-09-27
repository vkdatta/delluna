export const name="caret-circle-double-right-fill";
export const id="dl_4b8616a9233b4f63a874";
export const url=new URL("../icons/caret-circle-double-right-fill.svg?v=6d5fbf15d42ff7f5d02e4662951cf9b6564ffda5552f3eb3dc1d49182c6ea651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
