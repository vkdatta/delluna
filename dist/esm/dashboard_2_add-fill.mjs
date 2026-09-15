export const name="dashboard_2_add-fill";
export const id="dl_5a1844afd7c94742944e";
export const url=new URL("../icons/D/dashboard_2_add-fill.svg?v=77c5bcae474ecafe95f15e3794cb12d9d034bb63ff7d3f5f88c40afde302b3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
