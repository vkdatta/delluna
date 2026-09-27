export const name="watch_lock-fill";
export const id="dl_afaa415741e4f7e80ab3";
export const url=new URL("../icons/watch_lock-fill.svg?v=21da8ed90b3f9cb2f9588ee9e140f09a02ca8db8b616c7d97f73c8fdf0ef5832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
