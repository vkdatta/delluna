export const name="globe-simple-duotone";
export const id="dl_ee626cbba80b494a8e47";
export const url=new URL("../icons/globe-simple-duotone.svg?v=55913c9ecd7d2d85c4e9abeddd446ed393f0e104682c0784132dabef4e9364e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
