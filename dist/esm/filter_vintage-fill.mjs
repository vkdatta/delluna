export const name="filter_vintage-fill";
export const id="dl_d29f5ad0b8f559e25235";
export const url=new URL("../icons/filter_vintage-fill.svg?v=9cca6e0f9c58d518df0ed9afec7966f67493d485d9914f8d7da4a56c318a273d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
