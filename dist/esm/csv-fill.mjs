export const name="csv-fill";
export const id="dl_9e98f535793949678e9c";
export const url=new URL("../icons/C/csv-fill.svg?v=37d6b80a17cab62247a9bb9a529c158c98b96e0c31cc6f9d64e369901b1c69e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
