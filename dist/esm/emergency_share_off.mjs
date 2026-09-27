export const name="emergency_share_off";
export const id="dl_6a5eae9c8b22f9252dee";
export const url=new URL("../icons/emergency_share_off.svg?v=141a15f352cfed22ade350580259a0c345f4ceaae818eaff85fdc3fb030dfebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
