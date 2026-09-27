export const name="filter_8-fill";
export const id="dl_a2547f15f1853e805471";
export const url=new URL("../icons/filter_8-fill.svg?v=834e8708b246782cfc66d694f444f1c3bcdd29633e53d001d79dd8d30f014cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
