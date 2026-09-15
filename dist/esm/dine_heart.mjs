export const name="dine_heart";
export const id="dl_ac71d45f54334a20b001";
export const url=new URL("../icons/D/dine_heart.svg?v=536583764028de0518803cf2670e17465b681f83220aff40382b89e00bc65f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
