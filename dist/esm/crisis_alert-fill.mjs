export const name="crisis_alert-fill";
export const id="dl_08b4696e021e3fc61296";
export const url=new URL("../icons/crisis_alert-fill.svg?v=0dff09bfa345df242144507877989cb00f178bf40819f720d1c732e1fa0d495f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
