export const name="nephrology-fill";
export const id="dl_40fd134629726af5f15c";
export const url=new URL("../icons/nephrology-fill.svg?v=069f3a35afc1eb829c583ba04e3459e7d910147d48ffa6540a5272a4be3eebe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
