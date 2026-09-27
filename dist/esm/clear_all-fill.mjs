export const name="clear_all-fill";
export const id="dl_f624f90e2da513c8b0bd";
export const url=new URL("../icons/clear_all-fill.svg?v=5f2dc4190058c8d751c1bac5a7711585060ebe4e803576a85a1f5d009e55a7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
