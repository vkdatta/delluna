export const name="lucid_1-briefcase-medical";
export const id="dl_a95ba20142a74707b827";
export const url=new URL("../icons/lucid_1-briefcase-medical.svg?v=59a5e2e92a30d63949b008b7d4b5aa9615eb0e784cebc5cf807265babd2448aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
