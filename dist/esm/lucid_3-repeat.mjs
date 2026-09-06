export const name="lucid_3-repeat";
export const id="dl_f225569790574796a701";
export const url=new URL("../icons/lucid_3-repeat.svg?v=fe269dda909c02e6cd6fbd48655497bd5646bee81faa42b9d97cdb9dd131c5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
