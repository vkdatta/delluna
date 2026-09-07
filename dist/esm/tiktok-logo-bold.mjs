export const name="tiktok-logo-bold";
export const id="dl_6caf754bb7b347b1b1fc";
export const url=new URL("../icons/T/tiktok-logo-bold.svg?v=a6f5d6d511e035f428b97d3e74812c4beda2fbb135aa0c89120c46e521511466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
