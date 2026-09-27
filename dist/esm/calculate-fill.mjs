export const name="calculate-fill";
export const id="dl_8da9f11af53b62730e05";
export const url=new URL("../icons/calculate-fill.svg?v=04a04391e7df2116120960f4c6d7283921d4c53f116a7b5961ee15d00f63650a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
