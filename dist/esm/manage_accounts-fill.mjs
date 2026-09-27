export const name="manage_accounts-fill";
export const id="dl_df761a452b2a8468f51b";
export const url=new URL("../icons/manage_accounts-fill.svg?v=0a96cdc88782da1e22418466eac09f05a61428c097114437579c7be661932fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
