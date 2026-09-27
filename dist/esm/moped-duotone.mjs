export const name="moped-duotone";
export const id="dl_9218567d66c04b54be62";
export const url=new URL("../icons/moped-duotone.svg?v=38174816d736ff7cde0d0ef20e5ad8df7c94fcdbfa848c282613d21110e96a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
