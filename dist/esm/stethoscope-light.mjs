export const name="stethoscope-light";
export const id="dl_f12cb4cca2e30a0a870c";
export const url=new URL("../icons/stethoscope-light.svg?v=dd587b6efb6aa40b42a798cdd212456450f135da126487dccaf9973b3565ce7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
