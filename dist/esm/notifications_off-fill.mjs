export const name="notifications_off-fill";
export const id="dl_f28f83d0d708d4956448";
export const url=new URL("../icons/notifications_off-fill.svg?v=5a55a74ac7dd112c2844dff476bda1773366918a1cefbee862bd0868898edfc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
