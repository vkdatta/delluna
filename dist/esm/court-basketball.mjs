export const name="court-basketball";
export const id="dl_17f9a768042b4945a2f7";
export const url=new URL("../icons/court-basketball.svg?v=34e89b2c7cde2db07411fc613a1d89dbb4be41eb9bd1770f64af3d0e36a7b4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
