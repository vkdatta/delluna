export const name="unknown_med-fill";
export const id="dl_0108c4b2e677bf5ad4ae";
export const url=new URL("../icons/unknown_med-fill.svg?v=3a0a98fd3c8f103ffb9dda09f023ed63bbcd9a1b22bfdf5996601225f06e07f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
