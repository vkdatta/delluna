export const name="umbrella-simple-bold";
export const id="dl_cde41a857d734cbeb504";
export const url=new URL("../icons/U/umbrella-simple-bold.svg?v=214670adb3b2653f44b635e00c4ec44eb2212bc17dcb55a566ac7cb313b52567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
