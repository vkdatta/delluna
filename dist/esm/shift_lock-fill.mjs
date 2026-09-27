export const name="shift_lock-fill";
export const id="dl_0d8e3acb834d0242b4f8";
export const url=new URL("../icons/shift_lock-fill.svg?v=0704e62917d23fc2b8445d7796dd37ca0d70d7b274870d9c93358131071eb6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
