export const name="approval_delegation_off-fill";
export const id="dl_ac4f36523e82349207ff";
export const url=new URL("../icons/approval_delegation_off-fill.svg?v=034cfb67639bf47099ea1c25dbbc1d07d2ec9047ee6ed07d302e68897357e342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
