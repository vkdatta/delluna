export const name="print_error-fill";
export const id="dl_45b5846ad35c49a89df0";
export const url=new URL("../icons/print_error-fill.svg?v=730a18d73e8cf01a44ed8d9a2fa6e75eef73bd1564c12726cd70633c441b685a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
