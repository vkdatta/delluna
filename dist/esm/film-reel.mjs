export const name="film-reel";
export const id="dl_7cb2fdd715d340b28e1e";
export const url=new URL("../icons/film-reel.svg?v=c3d0fcd26670354a34f23c4322d8a424bddd8e4072d2b762e6efe6e4a251d254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
