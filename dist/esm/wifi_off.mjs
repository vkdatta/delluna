export const name="wifi_off";
export const id="dl_a37da4bf314145139aeb";
export const url=new URL("../icons/W/wifi_off.svg?v=f968b28a079e2f9f46b6883c32bdf120aaa80998ee4a4c4d01b0e96dafcc9ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
