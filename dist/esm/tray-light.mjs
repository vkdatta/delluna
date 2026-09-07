export const name="tray-light";
export const id="dl_cce77111b23a4c33b962";
export const url=new URL("../icons/T/tray-light.svg?v=b2c175b4c2c66f6de1590b2474bbd0ff3731f8800fc3a62624b46ef16730bfd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
