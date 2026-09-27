export const name="eyedropper-duotone";
export const id="dl_850f92ef3545496c8718";
export const url=new URL("../icons/eyedropper-duotone.svg?v=7c9adb21588721b3ea3e766b5e0e4a46d19064c485f8612eb0d497d6061f7692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
