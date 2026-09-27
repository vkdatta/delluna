export const name="greater-than-duotone";
export const id="dl_56ab0670ba5f40ebb32f";
export const url=new URL("../icons/greater-than-duotone.svg?v=33d11ed3ddf98063e5f4a5f9be7702e43f0434c5b350f6777f6200501b632493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
