export const name="coins-fill";
export const id="dl_fc3f352c4aa1419e847b";
export const url=new URL("../icons/coins-fill.svg?v=8eaf954f6a6ad2b0abb0862093ddb7a18e240be1a52efe2729bb44676f4b2315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
