export const name="tractor-duotone";
export const id="dl_4b3a96eb029342e58c6a";
export const url=new URL("../icons/T/tractor-duotone.svg?v=bf02e1c85a7bbc593317b3ed0757583e602d8cca6e3c8fda997a5a79ce3eb694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
