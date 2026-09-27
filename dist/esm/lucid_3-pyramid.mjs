export const name="lucid_3-pyramid";
export const id="dl_22d280d58bed4305b184";
export const url=new URL("../icons/lucid_3-pyramid.svg?v=dc0b48f0c708091a03dfeb6e340da49f4b25bb7bcbe5ad89a91101c181c25973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
