export const name="mobile_hand_left_off";
export const id="dl_45349b943349e7feb665";
export const url=new URL("../icons/mobile_hand_left_off.svg?v=5f88c93d9145f64aa3ad9b8b1b0d0a395b2136a64a32f67970ed8ad15e05aadf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
