export const name="no_accounts-fill";
export const id="dl_ca161c84dba0af0a1ff0";
export const url=new URL("../icons/no_accounts-fill.svg?v=737f04ae4ea5ebcbf15f76cca6579e99d548fe7ef6478c0aa18f549a2dcd5609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
