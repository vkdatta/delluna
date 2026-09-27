export const name="lucid_1-cake-slice";
export const id="dl_2b7379ab5f57471d94c5";
export const url=new URL("../icons/lucid_1-cake-slice.svg?v=11ef45bd74b1d02fc5a8cae1fad99b602f5e4b0e571473717f98345a32bb45d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
