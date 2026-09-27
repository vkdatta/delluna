export const name="mobile_hand_left";
export const id="dl_014eb42e9a0ef803cce1";
export const url=new URL("../icons/mobile_hand_left.svg?v=d9592a079c8767ba69b4159a8e122cd8e12ab3c9d64eeca0ad3fa69ac9f367e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
