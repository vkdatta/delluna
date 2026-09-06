export const name="phone-plus-duotone";
export const id="dl_60aac705d8a94e4a9717";
export const url=new URL("../icons/phone-plus-duotone.svg?v=16e6b9ad10a126851a5ed40b158324244b28426d0a7c6dca20c0e7027ae75f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
