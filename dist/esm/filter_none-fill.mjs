export const name="filter_none-fill";
export const id="dl_31e3e696f2fe9888823e";
export const url=new URL("../icons/filter_none-fill.svg?v=221185944acf5f35a928ee0c8055fcce54314432487e9a106bca39f19709bd24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
