export const name="film-script-bold";
export const id="dl_6d3079ba6ed24d59bc7f";
export const url=new URL("../icons/film-script-bold.svg?v=f192088c5b4ee8113ba2fda0de0670850e0b8e134a5ed703857efd50add86774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
