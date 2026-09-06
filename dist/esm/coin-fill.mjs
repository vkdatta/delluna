export const name="coin-fill";
export const id="dl_3e952df4508448488078";
export const url=new URL("../icons/coin-fill.svg?v=850301630e2ce097cae9f81e47869a3a2750bd4698f568f9c0efdfb30e23ec27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
