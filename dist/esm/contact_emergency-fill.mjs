export const name="contact_emergency-fill";
export const id="dl_d883ec04b4a2ff3a26d9";
export const url=new URL("../icons/contact_emergency-fill.svg?v=b4742b7a7e5f4c0293582c224faa2b8c1b7fa900ab21437adb531e930faa56a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
