export const name="video-duotone";
export const id="dl_28c2d4585e824fa38981";
export const url=new URL("../icons/V/video-duotone.svg?v=8bf897e3b1ac4e8fdb0f64abeead83afe9def2ab2785529df7869422bf6bbd25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
