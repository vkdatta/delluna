export const name="film-reel-duotone";
export const id="dl_ffb69aa360284e4cadbb";
export const url=new URL("../icons/film-reel-duotone.svg?v=bba601311bdc223cbb67e16e0212554ff82d146e256db8c1a41250c632fb74b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
