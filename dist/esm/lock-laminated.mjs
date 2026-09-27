export const name="lock-laminated";
export const id="dl_ab5871be08af4091b013";
export const url=new URL("../icons/lock-laminated.svg?v=5914ee5dba9aff02747e683f53a2dc657a5fbc993724d732abe41f48cdb4df09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
