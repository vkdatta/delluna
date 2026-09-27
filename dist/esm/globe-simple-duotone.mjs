export const name="globe-simple-duotone";
export const id="dl_ee626cbba80b494a8e47";
export const url=new URL("../icons/globe-simple-duotone.svg?v=710009af35f9089a1664800084fc7bba438bbd3e95318800fecbb6802b1ab9a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
