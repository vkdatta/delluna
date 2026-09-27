export const name="lucid_3-pilcrow";
export const id="dl_0029b7486d3f4988b3cd";
export const url=new URL("../icons/lucid_3-pilcrow.svg?v=434cd24ab30136e820844207790c529cd0e08fa3a29240ef57d1855d817d3388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
