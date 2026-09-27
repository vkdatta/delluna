export const name="mobile_check-fill";
export const id="dl_8b4486a4dcecdb28a51c";
export const url=new URL("../icons/mobile_check-fill.svg?v=928fc8d498251aa5e3af215e02d2aa9a30a8508f1fef6c22ba19f221847f66f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
