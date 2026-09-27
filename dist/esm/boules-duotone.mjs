export const name="boules-duotone";
export const id="dl_0f78a3477ca149dfaad3";
export const url=new URL("../icons/boules-duotone.svg?v=c6927dcaa34f12faac0124a6c4888c08d441858a2c6cf355cac789adc6b87b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
