export const name="mobile_lock_portrait-fill";
export const id="dl_ea89a65f0721412796b2";
export const url=new URL("../icons/mobile_lock_portrait-fill.svg?v=05596904b058f1ee6c6ab5b9bcf84a58c09ed9f07bd43b10e3123fffc7b5425e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
