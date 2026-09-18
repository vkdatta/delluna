export const name="blur_medium-fill";
export const id="dl_d450d5ce4fdf4d78a401";
export const url=new URL("../icons/blur_medium-fill.svg?v=8e1e0b2d0796049beeb5d63da4bbc6f97d3aaa344ce1847f910e9116670633be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
