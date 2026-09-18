export const name="metabolism-fill";
export const id="dl_2915f509c8b94648a7ba";
export const url=new URL("../icons/M/metabolism-fill.svg?v=8c4cb0598a3bbe8a595d4816f6de356b3a72a2afbe344e52f2ed3bd849a651e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
