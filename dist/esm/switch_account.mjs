export const name="switch_account";
export const id="dl_121b178d7bf02c2f4aea";
export const url=new URL("../icons/switch_account.svg?v=d1cd517c638dbea5403199b71e0e02cd2ce1f191c69ba9db48613f14fe6b5e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
