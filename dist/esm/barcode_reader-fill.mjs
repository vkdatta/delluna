export const name="barcode_reader-fill";
export const id="dl_8350dd2cd1bc02616be2";
export const url=new URL("../icons/barcode_reader-fill.svg?v=5b5e1590ae50e52db9d7fa05fde73210f076839c5368eb07440571332092e353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
