export const name="history_2-fill";
export const id="dl_5a1eb000c39211726aa0";
export const url=new URL("../icons/history_2-fill.svg?v=d2b0fe94300fabec8294ef69c0485214369d25666ea2fa727ac282c30e7088f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
