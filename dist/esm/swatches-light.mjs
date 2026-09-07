export const name="swatches-light";
export const id="dl_dcb8210a82f04bc6b6cc";
export const url=new URL("../icons/S/swatches-light.svg?v=9856aa83a631a69c87df88912cb51326b8c0586e93a39c54c921adf7da574e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
