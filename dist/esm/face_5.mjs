export const name="face_5";
export const id="dl_024170b9b5224b898549";
export const url=new URL("../icons/face_5.svg?v=f274c11a332431893c93b19d2635a951daf25ef0a03a35d000293e373eba951a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
