export const name="explore_off-fill";
export const id="dl_25c3abf7a93ce747b1b0";
export const url=new URL("../icons/explore_off-fill.svg?v=824e7af669411e840860a9f1369f49b4e38832112149c7b4788a56e8bb6763f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
