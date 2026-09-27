export const name="mouse_lock_off-fill";
export const id="dl_921fbf0d69fad121f4e7";
export const url=new URL("../icons/mouse_lock_off-fill.svg?v=18c02f97c9600ff0655194566b840e41bde186f234f7c3b9e2726e3a02984a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
