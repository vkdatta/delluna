export const name="film-reel";
export const id="dl_7cb2fdd715d340b28e1e";
export const url=new URL("../icons/film-reel.svg?v=e2a69074d948b15fc71891009b067628d8f7a27090c3d3c4421d43a132accd94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
