export const name="sign-in";
export const id="dl_6a2a1ba25bf94e7492a7";
export const url=new URL("../icons/S/sign-in.svg?v=4f9ac62582c9319778af5aef0865ba15b777378d222f4475be72ba1115bba076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
