export const name="lucid_2-gamepad";
export const id="dl_e8324d7244e2415fab5a";
export const url=new URL("../icons/lucid_2-gamepad.svg?v=a2be50d6041e7eaf1c7874a7014479d428525db9918b9a230010d14246df6ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
