export const name="lucid_3-package-search";
export const id="dl_e7913dbcdc3242748b19";
export const url=new URL("../icons/lucid_3-package-search.svg?v=5c78d27c1fa5ee627d11e3405ce6ec8a19423a38e16728d29d0b8ca55147e72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
