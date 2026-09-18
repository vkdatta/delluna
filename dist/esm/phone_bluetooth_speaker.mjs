export const name="phone_bluetooth_speaker";
export const id="dl_d7005a200a1b4d6ba7c3";
export const url=new URL("../icons/phone_bluetooth_speaker.svg?v=f28439e50a57030766a8c20b7c7224461f594f48e13aa58ea30cd143626bdfcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
