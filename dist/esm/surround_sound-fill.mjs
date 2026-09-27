export const name="surround_sound-fill";
export const id="dl_640c39e699b2a9cc8deb";
export const url=new URL("../icons/surround_sound-fill.svg?v=cb21b48578f61aa08540bc0bbfea1bbff790aff6a8f20e992369bb23deec1c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
