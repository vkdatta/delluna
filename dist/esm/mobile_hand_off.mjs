export const name="mobile_hand_off";
export const id="dl_fc55d0e0b3b2e6bcc210";
export const url=new URL("../icons/mobile_hand_off.svg?v=70cfc694d3e5be6a09092599ac86622048791a48d5cec5c160cfe7a4972c0a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
