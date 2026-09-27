export const name="speaker-none-light";
export const id="dl_3d0dd1889888c043e643";
export const url=new URL("../icons/speaker-none-light.svg?v=f3bb2a3b58fe3d1c1aceed372f734ff8b536bafd5801776ff08aa031776f9ab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
