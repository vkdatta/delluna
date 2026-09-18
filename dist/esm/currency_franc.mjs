export const name="currency_franc";
export const id="dl_08024d9ab91a4f23b7b1";
export const url=new URL("../icons/currency_franc.svg?v=64da26019cda98a85bed38817889c9fa22cc7a7f1621d25261dca448949daa3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
