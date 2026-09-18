export const name="landscape_2_off";
export const id="dl_3425248446bd43ddbe14";
export const url=new URL("../icons/landscape_2_off.svg?v=0f9ca8463faee5a270b58a432881570aeb98bb21f161a76ccf8dc7cfec681fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
