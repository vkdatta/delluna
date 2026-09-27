export const name="wifi_tethering-fill";
export const id="dl_6414bdeac3d963bdc9f9";
export const url=new URL("../icons/wifi_tethering-fill.svg?v=f1a3a3dd085991c1c27306b5baf76b7b7ed84812087ddbc3531510b0abd10d56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
