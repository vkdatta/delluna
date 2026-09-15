export const name="flash_off";
export const id="dl_f92bad0ffe0d4961b948";
export const url=new URL("../icons/F/flash_off.svg?v=87a36d829b841cb72254e1831146a766f375c32d5ef29214a1e77ca36e1aa8a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
