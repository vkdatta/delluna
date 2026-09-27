export const name="inventory_2";
export const id="dl_5781da55a20e0f8e51d2";
export const url=new URL("../icons/inventory_2.svg?v=4d0229a052174aa1ae73b4406e6aca9f9edd8e400eeeda2563667d4b430d06fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
