export const name="lucid_2-dna";
export const id="dl_e2b8c97431a448f8b07e";
export const url=new URL("../icons/lucid_2-dna.svg?v=77cb68810956b37c5d1d8204238c75e7a01df437faa25b7769d0687fda7692f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
