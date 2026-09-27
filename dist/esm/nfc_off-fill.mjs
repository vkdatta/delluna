export const name="nfc_off-fill";
export const id="dl_0b4267211a4563d614be";
export const url=new URL("../icons/nfc_off-fill.svg?v=542fa2a57042b0f2a460493b5c8da7766c1eb2a7ca80eccf1ed69020cdad653f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
