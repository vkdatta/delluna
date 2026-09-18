export const name="shutter_speed";
export const id="dl_6ead821ccae54771b3ab";
export const url=new URL("../icons/shutter_speed.svg?v=ac9c0f4d4c47bbc9e2bcdca69e41e4027699833d953f2a975995dd1f4dea72df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
