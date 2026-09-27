export const name="film-reel-light";
export const id="dl_219889ae62e648fca36e";
export const url=new URL("../icons/film-reel-light.svg?v=6ec31f0c83e242cc773212706f54d22da9b96ea3c76d8703c68f010718c97b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
