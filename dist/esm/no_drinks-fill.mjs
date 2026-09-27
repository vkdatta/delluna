export const name="no_drinks-fill";
export const id="dl_0284f9ef6b4592506976";
export const url=new URL("../icons/no_drinks-fill.svg?v=7869317f4a02aeed9fca8a35d1f02d43986244e2b2cb20d18c2eb11e8bf984e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
