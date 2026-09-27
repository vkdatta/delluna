export const name="device-mobile-duotone";
export const id="dl_506802de147446a0a105";
export const url=new URL("../icons/device-mobile-duotone.svg?v=88fdd6581781d7893a91cdfc59c562154bc6f39af816828bd9b794dac1a223c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
