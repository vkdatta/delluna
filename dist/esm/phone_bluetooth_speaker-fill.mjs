export const name="phone_bluetooth_speaker-fill";
export const id="dl_d67c96a637b17251081a";
export const url=new URL("../icons/phone_bluetooth_speaker-fill.svg?v=e174e7731d6e4b2d64f643a29447b470dd06e45748b4a4f17ff2c3d9988d05ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
