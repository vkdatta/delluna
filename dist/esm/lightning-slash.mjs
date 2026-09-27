export const name="lightning-slash";
export const id="dl_7f99d8d871c34f6ba96b";
export const url=new URL("../icons/lightning-slash.svg?v=92067eb13bb6b177c94317f73709bc494d70dbe744b7ddfbc468e93d5ab22467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
