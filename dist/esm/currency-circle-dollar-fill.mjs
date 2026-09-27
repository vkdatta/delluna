export const name="currency-circle-dollar-fill";
export const id="dl_90f7938a8ad642f9af00";
export const url=new URL("../icons/currency-circle-dollar-fill.svg?v=4647df03895d03c427c7483f749e1b91a2cf83729e5765b78da2fbcb82b774d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
