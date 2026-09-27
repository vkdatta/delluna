export const name="clock-user-light";
export const id="dl_0447629c2f264a64bb92";
export const url=new URL("../icons/clock-user-light.svg?v=854f2009fffcac1a4ae2895ef780b511e30ae46f2c9bab87344ceb370f412c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
