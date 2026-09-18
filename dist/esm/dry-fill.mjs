export const name="dry-fill";
export const id="dl_d7b55311c1e841aab2a0";
export const url=new URL("../icons/dry-fill.svg?v=61ad729d6f1e68844a75f37aed7d79073a00e19fbcee125090f743beac2548db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
