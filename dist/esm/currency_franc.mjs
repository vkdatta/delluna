export const name="currency_franc";
export const id="dl_4403914617b6197581c4";
export const url=new URL("../icons/currency_franc.svg?v=6fe3f63f038d59af55d3890e709abda7a026d39c47bb97d3f57648ffdae63969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
