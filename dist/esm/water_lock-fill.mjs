export const name="water_lock-fill";
export const id="dl_7d95a4a5b437522a9d2d";
export const url=new URL("../icons/water_lock-fill.svg?v=6cf00f1e0cdc7d1c60d6bd05606759e89eab2a4bcc7987a272924b420713abf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
