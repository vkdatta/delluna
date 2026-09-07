export const name="film-reel-duotone";
export const id="dl_ffb69aa360284e4cadbb";
export const url=new URL("../icons/film-reel-duotone.svg?v=2abc55c97247179a992ed9ecbf67975198d0ecdcf8818a403b5a4c3cd7ae9033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
