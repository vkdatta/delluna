export const name="hoodie";
export const id="dl_d00af9fb41b4452b8c39";
export const url=new URL("../icons/hoodie.svg?v=bacc68585da1789682f4178dab874b21c1f4fbe01037fdaa977776cfb4274506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
