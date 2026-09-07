export const name="three-d-fill";
export const id="dl_5c62d0ca575d41c8a5c4";
export const url=new URL("../icons/T/three-d-fill.svg?v=dcbb352a9aaef99f16a02095120da41a3f2d6c664ed5a3b323c5f9331db8a882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
