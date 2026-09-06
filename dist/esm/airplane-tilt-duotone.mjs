export const name="airplane-tilt-duotone";
export const id="dl_c26965edab9d4d49925b";
export const url=new URL("../icons/airplane-tilt-duotone.svg?v=666886c4559c616370e4bbfe2a0cfb88db3b6540febebd67ef25deb261fcf595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
