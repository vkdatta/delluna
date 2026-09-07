export const name="wine-fill";
export const id="dl_9ca123e5c5364538868a";
export const url=new URL("../icons/W/wine-fill.svg?v=6b1ae149fcbe182cc8d24ff763c364b6fc31c6113e83962394186b58f8dfdfb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
