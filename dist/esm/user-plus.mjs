export const name="user-plus";
export const id="dl_973409d0a4a3450e9a94";
export const url=new URL("../icons/U/user-plus.svg?v=02197487a2b9ba649efc90baa79e2868bed55c1050a7f7130d348f1a4e2c8678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
