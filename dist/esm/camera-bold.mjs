export const name="camera-bold";
export const id="dl_5bdfa7cdc6e84e729aa6";
export const url=new URL("../icons/camera-bold.svg?v=ff416a1b15724c2d59c845f8ea24345c463f1ef0f0245363cee30dc9be70250d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
