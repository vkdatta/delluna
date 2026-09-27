export const name="qr_code_scanner-fill";
export const id="dl_1076b15f66f57f9af0ed";
export const url=new URL("../icons/qr_code_scanner-fill.svg?v=b6feef81bcf403ad3c6c64e78c85305cd8f588f8a54016df9c9773b70718f89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
