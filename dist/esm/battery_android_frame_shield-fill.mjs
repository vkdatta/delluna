export const name="battery_android_frame_shield-fill";
export const id="dl_8a68855724dd4424b128";
export const url=new URL("../icons/battery_android_frame_shield-fill.svg?v=50cf97d1225dfc2c4031d998bd98f304b3dc9ce8aee48b554ad982c95c7838bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
