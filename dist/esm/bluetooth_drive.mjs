export const name="bluetooth_drive";
export const id="dl_39663afd4ee87de2a539";
export const url=new URL("../icons/bluetooth_drive.svg?v=06c05607c87b6f0116182280a0f4b6cef0867e6c4267cd80ef251edb33dc1367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
