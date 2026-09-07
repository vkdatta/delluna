export const name="lucid_3-phone-missed";
export const id="dl_371cff3fb83642a786f0";
export const url=new URL("../icons/lucid_3-phone-missed.svg?v=b31a69d7b773c18cd50662e45c83993bb6ef07db10a1f78a01f6110f98db25e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
