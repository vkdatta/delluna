export const name="brightness_3-fill";
export const id="dl_a09d40f0777e34334aed";
export const url=new URL("../icons/brightness_3-fill.svg?v=bf5adb3ff502d0f6376b7a6e36b69bc7f5a3a9c70fafdb01bc43151bab97e307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
