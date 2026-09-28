export const name="dual_screen-fill";
export const id="dl_710ccba79a3ca04b6202";
export const url=new URL("../icons/dual_screen-fill.svg?v=82505bb63af8ca10b3512c287f13b39ca35df0c2db87637d7869d9c7cd3c3b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
