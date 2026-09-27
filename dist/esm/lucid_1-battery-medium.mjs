export const name="lucid_1-battery-medium";
export const id="dl_ffdd27b4339244d7b2a2";
export const url=new URL("../icons/lucid_1-battery-medium.svg?v=7f9e62f6ec240f9b03a6382ae443670e78570ad8bf800d063212afdcc70405dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
