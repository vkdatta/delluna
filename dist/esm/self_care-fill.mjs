export const name="self_care-fill";
export const id="dl_7762f6e82c696d10214d";
export const url=new URL("../icons/self_care-fill.svg?v=1eecfe30a4e1044e1752fce93007c7d5b06691d02ff0b3d8b591483c0f9c9645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
