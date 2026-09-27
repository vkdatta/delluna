export const name="mobile_hand_left";
export const id="dl_11d2bb339ad6bd845588";
export const url=new URL("../icons/mobile_hand_left.svg?v=a3a896d7ce18dcbcd9b92bf5a6dac4b77a86d6e3e2ba9922c397f8d7e2e64540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
