export const name="battery_android_frame_shield-fill";
export const id="dl_f86654e1cbd7c3d29e68";
export const url=new URL("../icons/battery_android_frame_shield-fill.svg?v=ba4801e3d7f66348bbc262f298fbb052de2796605896a5dcb97c84e3ede80845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
