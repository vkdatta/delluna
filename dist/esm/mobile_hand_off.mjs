export const name="mobile_hand_off";
export const id="dl_a5bfabb23207739805d5";
export const url=new URL("../icons/mobile_hand_off.svg?v=29dada0b436a6eb62fc11e26cf34272bfe91169d5ba386b3b6a3c82ca3ed0117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
