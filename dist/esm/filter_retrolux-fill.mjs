export const name="filter_retrolux-fill";
export const id="dl_b62440b7bed41a24af63";
export const url=new URL("../icons/filter_retrolux-fill.svg?v=8a5e3c4abbee05df278d413734e4900636384257e01667b61bf19e33fc488f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
