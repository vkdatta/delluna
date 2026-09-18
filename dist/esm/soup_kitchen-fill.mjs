export const name="soup_kitchen-fill";
export const id="dl_fab527540bbe46ea8cf5";
export const url=new URL("../icons/S/soup_kitchen-fill.svg?v=9caf8bb3a23e1e8d7b7c6cd520c649684ac588ef2f7a100996ab1daa295e89d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
