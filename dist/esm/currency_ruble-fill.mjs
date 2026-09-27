export const name="currency_ruble-fill";
export const id="dl_4d60a04c2db1f111f20a";
export const url=new URL("../icons/currency_ruble-fill.svg?v=6feae2f5e7faa6c2508232b229dbdc297e284e802dc601a842b13d4be7124490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
