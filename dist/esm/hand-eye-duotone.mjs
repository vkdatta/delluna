export const name="hand-eye-duotone";
export const id="dl_8f6031c519f24e0d9752";
export const url=new URL("../icons/hand-eye-duotone.svg?v=fba6ed06a0db1f6286242e83e0b45d784cd8d1a6a29f7c772a85e9e718851949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
