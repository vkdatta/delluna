export const name="sensors_krx_off-fill";
export const id="dl_3c69f8a465fbee661034";
export const url=new URL("../icons/sensors_krx_off-fill.svg?v=c90a68da5e5c6845b4fd5cc358bf16a6d3e5ce84c882f7f52282d97492a417d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
