export const name="9k-fill";
export const id="dl_cff7594fdf5e84a1a9cb";
export const url=new URL("../icons/9k-fill.svg?v=db9a5e4f96ed93d0c326b71e4afd6ff4f6286d19c7e696ae4f5f0499c611f1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
