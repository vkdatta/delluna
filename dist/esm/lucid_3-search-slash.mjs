export const name="lucid_3-search-slash";
export const id="dl_7ee37ef433204603bff4";
export const url=new URL("../icons/lucid_3-search-slash.svg?v=16a97a9cd61d71685b549446745ddd5c1e8648b68b898c5ad3cb8678ebf4bac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
