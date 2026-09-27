export const name="database_off-fill";
export const id="dl_85254af88dab71f67c2e";
export const url=new URL("../icons/database_off-fill.svg?v=b1719c0a8e2f85570e728e68621c1e30beda0c7e88deaea5b4a2d927481ca681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
