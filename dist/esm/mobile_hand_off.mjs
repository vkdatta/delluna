export const name="mobile_hand_off";
export const id="dl_b6fab8d6078a48a41e24";
export const url=new URL("../icons/mobile_hand_off.svg?v=7ec3374b8ecaacb60343c542a3948a5fe8f0ec6642fdce16cfe877b8f8d54cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
