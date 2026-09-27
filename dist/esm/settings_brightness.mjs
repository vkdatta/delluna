export const name="settings_brightness";
export const id="dl_1641135e27e6faa4fd3f";
export const url=new URL("../icons/settings_brightness.svg?v=222491d541006bfbe9f9d5c1ae33e2c2ced23c61b123efb7dfde22314f4a69c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
