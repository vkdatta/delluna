export const name="lucid_1-chart-bar-big";
export const id="dl_c49b44f05d314ec78a9f";
export const url=new URL("../icons/lucid_1-chart-bar-big.svg?v=42a0ad5092f7be1399352d0dc6edb3adafa18b24c65953a963591c521d40aa47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
