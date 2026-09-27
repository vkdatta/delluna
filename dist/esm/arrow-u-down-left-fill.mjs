export const name="arrow-u-down-left-fill";
export const id="dl_27b5c2b397174cf6b95a";
export const url=new URL("../icons/arrow-u-down-left-fill.svg?v=4beb2adc9024bfac7ee4332433acdfb42b1c5554aa154d26c521dd6889cca518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
