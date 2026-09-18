export const name="phone_enabled-fill";
export const id="dl_d72840283aa24d57af79";
export const url=new URL("../icons/phone_enabled-fill.svg?v=2e51a18b7719c3eaff71b5f8307aad6e3aefc6fe73ad570acc4f571567f40ab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
