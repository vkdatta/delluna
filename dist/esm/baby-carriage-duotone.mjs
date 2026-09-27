export const name="baby-carriage-duotone";
export const id="dl_1191d3caadc74828b04b";
export const url=new URL("../icons/baby-carriage-duotone.svg?v=0e3efc2a0c040231292969883fb497fbf123431539ffe892ae1085c24513ab40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
