export const name="subtract-square-fill";
export const id="dl_d31c264f7afb4852aa37";
export const url=new URL("../icons/S/subtract-square-fill.svg?v=b3fb908e266b94760bf566074ca6ddffd8ac74636ed64c82811cbc66c2935932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
