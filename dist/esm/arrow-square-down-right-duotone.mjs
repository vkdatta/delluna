export const name="arrow-square-down-right-duotone";
export const id="dl_99d2799482104b54b23b";
export const url=new URL("../icons/arrow-square-down-right-duotone.svg?v=164b747985283383c55658efd669e41198332d67c5d19235972b0569aa7fce4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
