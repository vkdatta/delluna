export const name="local_convenience_store";
export const id="dl_d480928da77a58b2366f";
export const url=new URL("../icons/local_convenience_store.svg?v=1675644af9fa428ae08bfa44a05c192110e4af6a3c61feb086eabfa36df6725e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
