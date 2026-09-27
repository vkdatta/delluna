export const name="barcode-bold";
export const id="dl_47d4c6285444487baa36";
export const url=new URL("../icons/barcode-bold.svg?v=d60116ff4e665e51e85ef83bc771c8d257f0e01d1d4b0d96ad6329aa497c46b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
