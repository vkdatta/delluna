export const name="barcode-light";
export const id="dl_74e870c45500403c9a66";
export const url=new URL("../icons/barcode-light.svg?v=b36c0c2349a5d7f748c4fb5312722b31f8e151ec35275cd2801263928b384ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
