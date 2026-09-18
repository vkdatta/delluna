export const name="mouse_lock_off";
export const id="dl_7150ac6488064b05adb4";
export const url=new URL("../icons/M/mouse_lock_off.svg?v=fa6a2f776477f3d51627821f2d1d6025712fb6c2bbbaab766f551265f570cf37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
