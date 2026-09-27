export const name="mobiledata_arrows-fill";
export const id="dl_3db22b0860b83c668429";
export const url=new URL("../icons/mobiledata_arrows-fill.svg?v=8211d27f3860f96853de2e35da2a4af2936fb5881b0e500072f8ea773a50aaf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
