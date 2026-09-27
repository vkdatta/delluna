export const name="healing";
export const id="dl_349176a2d74a81c9ca29";
export const url=new URL("../icons/healing.svg?v=7b24b7674a37ed353ca7bd3238c66e0c064fe510566615b29f283d836d9453cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
