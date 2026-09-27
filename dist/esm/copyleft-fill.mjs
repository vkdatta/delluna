export const name="copyleft-fill";
export const id="dl_31c39e06972445b782fd";
export const url=new URL("../icons/copyleft-fill.svg?v=90900eb8202cb3715c8497f6ca5a3a50ec8058ed33f91ded4f380406b495eda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
