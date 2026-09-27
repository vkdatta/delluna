export const name="lucid_3-package-search";
export const id="dl_e7913dbcdc3242748b19";
export const url=new URL("../icons/lucid_3-package-search.svg?v=3b5a1559f615076e3ae981e069b11c0914ba3a2e4bff78c47df3eca3f8ae7473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
