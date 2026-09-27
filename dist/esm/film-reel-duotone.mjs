export const name="film-reel-duotone";
export const id="dl_ffb69aa360284e4cadbb";
export const url=new URL("../icons/film-reel-duotone.svg?v=937e3d19f0db9da7dc89b16d84c99fe5cc7c516028628ec99b46554a0085cf5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
