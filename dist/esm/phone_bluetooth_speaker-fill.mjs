export const name="phone_bluetooth_speaker-fill";
export const id="dl_20bdeba104b43ee6be13";
export const url=new URL("../icons/phone_bluetooth_speaker-fill.svg?v=517de71e6ebdd8a7d3f4fde748eade83231f4182d7e33301a5a6fbfe13e2f1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
