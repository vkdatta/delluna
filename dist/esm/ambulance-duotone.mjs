export const name="ambulance-duotone";
export const id="dl_9b9d0980b9a84559916e";
export const url=new URL("../icons/ambulance-duotone.svg?v=96392fa115286cdbfb651e73937f47b3f692522d81cc25a56da3c09373a80899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
