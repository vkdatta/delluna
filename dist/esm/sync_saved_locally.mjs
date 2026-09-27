export const name="sync_saved_locally";
export const id="dl_ab551203456aab6b8790";
export const url=new URL("../icons/sync_saved_locally.svg?v=9e9412eb71e3833ec75bcfe82f518fa2ac45c457e1e824812ee8c75bd499a2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
