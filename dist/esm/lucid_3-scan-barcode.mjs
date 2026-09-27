export const name="lucid_3-scan-barcode";
export const id="dl_864da198b5db45839cd2";
export const url=new URL("../icons/lucid_3-scan-barcode.svg?v=e3d72b13385c9b71d3e7941d9909647685f969941334a7a41507b1f1d604c018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
