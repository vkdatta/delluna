export const name="user-list-light";
export const id="dl_df2accc89af2cc59f952";
export const url=new URL("../icons/user-list-light.svg?v=aab93c7a0a34dcc73674a628a0119820ca0f8fe48c992e0818634259e0252b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
