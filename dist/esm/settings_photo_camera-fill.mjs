export const name="settings_photo_camera-fill";
export const id="dl_ec53d2572f595b3bb66e";
export const url=new URL("../icons/settings_photo_camera-fill.svg?v=fb7cd2ce49e5e9cae786ecb06d2f5adc80411e05e1f97ff1383289300fbe437e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
