export const name="spatial_audio";
export const id="dl_7343887d73f24c9eb0b7";
export const url=new URL("../icons/S/spatial_audio.svg?v=a392c4af7b5f914480c968e7cce6d6b6e6f5e2d55a781d1f5d8aca9d40cf0712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
