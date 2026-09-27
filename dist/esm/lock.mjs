export const name="lock";
export const id="dl_47ed4f062720873f343a";
export const url=new URL("../icons/lock.svg?v=41bd693e13365e4d6ecfa11e5fe3129a7040c8f8405107056ad1e1007d15af90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
