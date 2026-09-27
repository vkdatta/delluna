export const name="mobile_sound_2";
export const id="dl_cb57cbbb02ff1214fb45";
export const url=new URL("../icons/mobile_sound_2.svg?v=23c9ba667af4f2747c0db97ea2ee4f573985abfda102697f54e52f8648de32f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
