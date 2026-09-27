export const name="lucid_1-bed-double";
export const id="dl_a8301bda9b0647f39534";
export const url=new URL("../icons/lucid_1-bed-double.svg?v=34f4826308ca9aba3abca64707352bce46494a6037e88b256576667fe449c48a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
