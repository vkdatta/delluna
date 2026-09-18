export const name="analytics-fill";
export const id="dl_803a70161e674bdf81cf";
export const url=new URL("../icons/analytics-fill.svg?v=6fbe019251266dade0b43cd608e85de040c2f9153207dfc85557331ab04bb4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
