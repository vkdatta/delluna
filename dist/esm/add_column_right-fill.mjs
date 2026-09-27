export const name="add_column_right-fill";
export const id="dl_4015def0f29fabda5a77";
export const url=new URL("../icons/add_column_right-fill.svg?v=5f6ae1d7472073831495e83dfc4758f25c2e6a87deddb06a70ed496b5a5562e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
