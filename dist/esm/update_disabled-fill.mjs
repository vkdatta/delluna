export const name="update_disabled-fill";
export const id="dl_ff8dfa1bf8cf4822b262";
export const url=new URL("../icons/U/update_disabled-fill.svg?v=8b786cc88d81aa1ea137b98412716110c1f1d4ff14d981078d82888d9be46511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
