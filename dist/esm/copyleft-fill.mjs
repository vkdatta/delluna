export const name="copyleft-fill";
export const id="dl_31c39e06972445b782fd";
export const url=new URL("../icons/copyleft-fill.svg?v=f88f8408eb169f18cb04950adbb887e71c346b43ea096a7af217909bb1e2ed2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
