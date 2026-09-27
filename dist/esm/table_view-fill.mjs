export const name="table_view-fill";
export const id="dl_86fc18fcf5d62310f592";
export const url=new URL("../icons/table_view-fill.svg?v=46966dc6c0704be7d6ff499307b098acf56b6cac25886031245fcff26bfa2817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
