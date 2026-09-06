export const name="brandy-fill";
export const id="dl_6aac5ae5042b4f5fbf4d";
export const url=new URL("../icons/brandy-fill.svg?v=c6d12de505692fee52753b7e105eb8064233d84d0994de4287adbaa790936751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
