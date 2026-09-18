export const name="qr_code_scanner-fill";
export const id="dl_0847af52238844e58a60";
export const url=new URL("../icons/qr_code_scanner-fill.svg?v=c5afc94f5ffdb46c72e51b15e4806d214b886b9a0c2edfc6f00a1926db512aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
