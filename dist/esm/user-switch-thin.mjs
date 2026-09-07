export const name="user-switch-thin";
export const id="dl_db772a361fc04b7fa698";
export const url=new URL("../icons/U/user-switch-thin.svg?v=596671905aa1292fd29166ba5a257c2a9aec46d8e42d9964e76aec9d13650d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
