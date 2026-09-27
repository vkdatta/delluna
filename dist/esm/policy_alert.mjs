export const name="policy_alert";
export const id="dl_4129acc1d522a5a98752";
export const url=new URL("../icons/policy_alert.svg?v=7ad6d3ee0adfb1bb27e3b23089e21b23580704cb836db3df77c15b3ee5f33918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
