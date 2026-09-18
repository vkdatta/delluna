export const name="garage_money-fill";
export const id="dl_318e6bce6ddf46bab9e3";
export const url=new URL("../icons/G/garage_money-fill.svg?v=46ecbaaa00a0b0e8e93508b44258e788116ebb4761ecc45d4fb17897cd2b056f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
