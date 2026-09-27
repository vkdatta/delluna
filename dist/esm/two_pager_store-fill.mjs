export const name="two_pager_store-fill";
export const id="dl_19323a4a993bb0c5eca1";
export const url=new URL("../icons/two_pager_store-fill.svg?v=1cab5bfb966c2e3a902c2704678ed4cbb803ab86ba31eb9375fdc22d3e1d7667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
