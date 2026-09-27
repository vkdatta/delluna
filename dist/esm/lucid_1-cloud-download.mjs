export const name="lucid_1-cloud-download";
export const id="dl_ed8bf05966d2439d9b54";
export const url=new URL("../icons/lucid_1-cloud-download.svg?v=3ad297560423daf776030bfc8e865bf12a3cd57213fd54973899b5825374c558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
