export const name="hand-eye-duotone";
export const id="dl_8f6031c519f24e0d9752";
export const url=new URL("../icons/hand-eye-duotone.svg?v=5302a0d1196b692fd16ee8d8677fe38d29aac8a793a624972f310102f68d503b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
