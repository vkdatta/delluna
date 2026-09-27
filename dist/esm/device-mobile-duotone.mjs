export const name="device-mobile-duotone";
export const id="dl_506802de147446a0a105";
export const url=new URL("../icons/device-mobile-duotone.svg?v=7f141a31ee8eea1a0712b9bf48d33424c195e80a174c6bdd93ab471c62e77e55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
