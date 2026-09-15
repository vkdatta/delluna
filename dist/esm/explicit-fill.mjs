export const name="explicit-fill";
export const id="dl_3b59a0fff37f4cba9342";
export const url=new URL("../icons/E/explicit-fill.svg?v=af86d84f1758c5c5e5836c5ea2248571c9d1289e66759792195346f5b1429e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
