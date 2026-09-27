export const name="screenshot_keyboard-fill";
export const id="dl_45239b53fe3a9a5d210d";
export const url=new URL("../icons/screenshot_keyboard-fill.svg?v=4f4ee48d74a32436127e8ce7b1bea56fb628731aed90744d32efa89c4cd3691d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
