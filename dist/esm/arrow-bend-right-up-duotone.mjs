export const name="arrow-bend-right-up-duotone";
export const id="dl_fa7364ddb08949b19059";
export const url=new URL("../icons/arrow-bend-right-up-duotone.svg?v=b692b1eeb7536b8b71b5e7a1d1e5446f4356040902e058513156b0fef0c71629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
