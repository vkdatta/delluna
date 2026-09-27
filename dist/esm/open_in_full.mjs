export const name="open_in_full";
export const id="dl_f5fe28483875e2d88f75";
export const url=new URL("../icons/open_in_full.svg?v=ee53a02f2d0706c60cfbce5bb5fe6f288805f070c6d9806d416fe4d5cada070b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
