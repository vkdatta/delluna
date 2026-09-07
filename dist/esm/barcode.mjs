export const name="barcode";
export const id="dl_3231ed7ec3844d44a3d2";
export const url=new URL("../icons/barcode.svg?v=ec0c74f098d05b6cb82eb1d3b388df390d4ccc603e7b8282679e5ff470df63f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
