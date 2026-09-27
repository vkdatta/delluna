export const name="gif_2-fill";
export const id="dl_758e0bc6087beafb64cc";
export const url=new URL("../icons/gif_2-fill.svg?v=ec7af0798834c9fa03547f2d6c69d800aa8916c5c2cf0389aad3fe1695d5ecda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
