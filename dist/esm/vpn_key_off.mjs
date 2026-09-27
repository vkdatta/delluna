export const name="vpn_key_off";
export const id="dl_422ef6948d5f5cb392ca";
export const url=new URL("../icons/vpn_key_off.svg?v=ba94a4807d15112b896dde04f02f77aa0c6523ab9328eca1b48008b6d8d4ced8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
