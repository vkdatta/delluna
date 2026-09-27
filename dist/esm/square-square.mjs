export const name="square-square";
export const id="dl_a2bdf76b9c314792b112";
export const url=new URL("../icons/square-square.svg?v=aba177698da57a1e4ad7ff09b95de7373aa6656109bd5120254bdd8cebceba2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
