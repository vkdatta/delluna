export const name="crop_3_2-fill";
export const id="dl_2bb676bf6cb9c08433ff";
export const url=new URL("../icons/crop_3_2-fill.svg?v=8d5f59fdb5f17a1ff4567a53b797b7d8f5e3673aabf7a4edb88bf5ec71091f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
