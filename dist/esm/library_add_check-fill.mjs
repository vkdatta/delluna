export const name="library_add_check-fill";
export const id="dl_6274604ca34902bd3898";
export const url=new URL("../icons/library_add_check-fill.svg?v=25f0851a3fc938c55c39081885ae769c2ba3f9c2faca4497c2f03a7e24b46dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
