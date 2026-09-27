export const name="phone-incoming-light";
export const id="dl_e2b3fdfe06844f128c88";
export const url=new URL("../icons/phone-incoming-light.svg?v=e9ad4a5c1fae0d66d1aa40a2c8cc0b4f375aa4e089b697a6a979b5a3003571c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
