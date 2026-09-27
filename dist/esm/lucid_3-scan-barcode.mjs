export const name="lucid_3-scan-barcode";
export const id="dl_864da198b5db45839cd2";
export const url=new URL("../icons/lucid_3-scan-barcode.svg?v=e8e64fba546503e9240f3659428284f7dcf4d12cc8e430f65fe55b68a2397dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
