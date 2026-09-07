export const name="taxi-duotone";
export const id="dl_c6474095824141028e19";
export const url=new URL("../icons/T/taxi-duotone.svg?v=26efeae2bd5ff23693ee20b011d3029375c180346f5f569d6176a0906bf542b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
