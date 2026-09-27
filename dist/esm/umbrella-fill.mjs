export const name="umbrella-fill";
export const id="dl_e5540a719b743a45f926";
export const url=new URL("../icons/umbrella-fill.svg?v=bf79ea116a82f07a6520da982eab79c0ce6ddd61cdeafcd221a4f88bcffb83aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
