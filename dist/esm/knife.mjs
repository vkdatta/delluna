export const name="knife";
export const id="dl_3af3e02149094ffa85af";
export const url=new URL("../icons/knife.svg?v=4b3229a6f61b39c9013a88a582b1e67d30fc5780599c410d9dbcb2da733e851d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
