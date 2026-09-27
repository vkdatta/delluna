export const name="user-circle-plus-thin";
export const id="dl_3cd0df3cc44b624a37d5";
export const url=new URL("../icons/user-circle-plus-thin.svg?v=e8445a2f5e6abc45d42dbb0540801eb70704c98ae340f4ef6450a24d2137a89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
