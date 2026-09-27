export const name="lucid_2-grid-2x2-x";
export const id="dl_6c75ed3746f746a097ef";
export const url=new URL("../icons/lucid_2-grid-2x2-x.svg?v=b746073caeb9513a01e436b15ab0b2bd12de38e7dac270b80375026ad73baaae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
