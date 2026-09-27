export const name="phone-x-bold";
export const id="dl_0cf1390099bc4c7fb0f3";
export const url=new URL("../icons/phone-x-bold.svg?v=21ff2c9a57614f6d8f4455083e4b5efce32f96a0d1decc8b2a2b4699491b8af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
