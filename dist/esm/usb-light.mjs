export const name="usb-light";
export const id="dl_9386beacf2be1e6952ad";
export const url=new URL("../icons/usb-light.svg?v=37b81d830530b424cd2d3e8410640722f1584943e64b6bca0f10086d88988c89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
