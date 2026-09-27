export const name="seal-check-light";
export const id="dl_b6f8023bf31f5ad9d297";
export const url=new URL("../icons/seal-check-light.svg?v=8a9178a61c91a080069bf8fbc95c815dbdb6d0b8d73c35926250af904ae04793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
