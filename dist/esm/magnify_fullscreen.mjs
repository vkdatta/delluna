export const name="magnify_fullscreen";
export const id="dl_6a219e64b43429dc66fc";
export const url=new URL("../icons/magnify_fullscreen.svg?v=0d244ea31469d033a9ba75e50bf263fb8761c5ec0cc9196704abf546c30b2c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
