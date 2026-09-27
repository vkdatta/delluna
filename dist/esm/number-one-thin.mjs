export const name="number-one-thin";
export const id="dl_3efd37f5ac64457dba0d";
export const url=new URL("../icons/number-one-thin.svg?v=d9d13cf17a25a47fb47adeb44adf5c19b0377c1e633d38f1e544602b94157a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
