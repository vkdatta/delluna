export const name="lucid_1-bell-dot";
export const id="dl_2e491811525c416d89ca";
export const url=new URL("../icons/lucid_1-bell-dot.svg?v=7da0f8f53abb59a8dd9b2bfac90e6de33f03747bf7cba9de693a02f3ed1d624e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
