export const name="user-key";
export const id="dl_e85f39688162404198a3";
export const url=new URL("../icons/user-key.svg?v=773cb87c28d42fed241f45f58d508a53c12a5ca614a7e7d9d2db0deae852c37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
