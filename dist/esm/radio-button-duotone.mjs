export const name="radio-button-duotone";
export const id="dl_e06d2d6af24b49f0895f";
export const url=new URL("../icons/radio-button-duotone.svg?v=312d0afdb8b891c7dca27d719296cc1acc28b4feb92cf83fbcac12dda00200c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
