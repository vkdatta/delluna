export const name="lucid_3-package-search";
export const id="dl_e7913dbcdc3242748b19";
export const url=new URL("../icons/lucid_3-package-search.svg?v=c1a511df9484414ed3270ad8f0c80686a657c83d5bf5facc0ebf62b82bd705e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
