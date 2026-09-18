export const name="settings_photo_camera-fill";
export const id="dl_bae33799789a480fa1ac";
export const url=new URL("../icons/S/settings_photo_camera-fill.svg?v=a659a4ef2e394f3f5518dcde7f84003ca456ac5abfa9714e84df563c909695b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
