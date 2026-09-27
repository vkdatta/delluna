export const name="filter_drama";
export const id="dl_ee56b7b787b1a2f3dfc1";
export const url=new URL("../icons/filter_drama.svg?v=266eaa01ec204c56511667d753a1513c2bef4df9cefffea6496c3cd16f815eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
