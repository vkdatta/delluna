export const name="barcode_scanner-fill";
export const id="dl_3af905525001d8c117ec";
export const url=new URL("../icons/barcode_scanner-fill.svg?v=b45779d80ac127af42c642f0da1f83b476494a816a0d8e04ac4942b76646d05e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
