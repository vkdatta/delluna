export const name="two_pager_store";
export const id="dl_905bfe10b003a338737d";
export const url=new URL("../icons/two_pager_store.svg?v=717c7e450c62c7e06eca8539240c9ec87dd8d6ef4ea76bb2d2e638fe5e074d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
