export const name="phone-slash-light";
export const id="dl_3c015dc26d044bc9b5d2";
export const url=new URL("../icons/phone-slash-light.svg?v=ab6fca4401dc71805a1811851e75b87aa9a038022e02ea8289e1498e9c86cd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
