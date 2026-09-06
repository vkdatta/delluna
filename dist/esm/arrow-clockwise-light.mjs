export const name="arrow-clockwise-light";
export const id="dl_170e6bac50f64a9eba2f";
export const url=new URL("../icons/arrow-clockwise-light.svg?v=5622fda1cd6a4e34233810b7e585119e109bf50013601f4f719deb59d061519d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
