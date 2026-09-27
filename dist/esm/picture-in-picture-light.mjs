export const name="picture-in-picture-light";
export const id="dl_c2abe6624fb241f6af20";
export const url=new URL("../icons/picture-in-picture-light.svg?v=4e9c68bd4f18157a9eace7425ac5b997a7c1d1861953b68b2fd11c1f0d435960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
