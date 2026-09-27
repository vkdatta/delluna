export const name="device-mobile-slash-bold";
export const id="dl_a12e9ae7005b45f3b45f";
export const url=new URL("../icons/device-mobile-slash-bold.svg?v=5041229995792a4436d12f4ddf6c0a8c0e27d430b628f9a1ae055f1fb6e728f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
