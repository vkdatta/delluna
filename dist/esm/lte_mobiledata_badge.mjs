export const name="lte_mobiledata_badge";
export const id="dl_a764ca0d971b329d45b7";
export const url=new URL("../icons/lte_mobiledata_badge.svg?v=ec59ab57f4f4ee23fea9593671dc4ec874749a6e57e388ab7ba4de032ae2f280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
