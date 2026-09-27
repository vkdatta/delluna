export const name="arrow-bend-left-down";
export const id="dl_bfaa9f348a9f4d0ba45b";
export const url=new URL("../icons/arrow-bend-left-down.svg?v=255bdfdb3329bf8d495be5a6475712a0e9e14f196b0247e8f4a8ad5040354e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
