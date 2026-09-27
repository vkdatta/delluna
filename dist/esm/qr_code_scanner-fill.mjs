export const name="qr_code_scanner-fill";
export const id="dl_bd1b75e5517e4e597f36";
export const url=new URL("../icons/qr_code_scanner-fill.svg?v=c8c0b72a24ed887f49d89a0f08d19de88fe8d42189b92f1aba09775b4c0d85d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
