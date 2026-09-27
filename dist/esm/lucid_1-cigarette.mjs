export const name="lucid_1-cigarette";
export const id="dl_db1c02aa63e64e85bb62";
export const url=new URL("../icons/lucid_1-cigarette.svg?v=258507b5b66596dee5f389c08f24974e11ebac1a54fea7143cc3abc00a3feaf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
