export const name="congenital-fill";
export const id="dl_70ae5003477544368670";
export const url=new URL("../icons/C/congenital-fill.svg?v=d37b83d61a6057ab330150877f1cd2f5f4cf43ea3236bd9fe00618ac25c6fda5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
