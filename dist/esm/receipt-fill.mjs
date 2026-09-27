export const name="receipt-fill";
export const id="dl_6d5cdc20785840b59284";
export const url=new URL("../icons/receipt-fill.svg?v=f52ce069664692861ff7f2aff9ce2e00968e099c630a5f67bc4331df9d598ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
