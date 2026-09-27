export const name="rows-plus-bottom-fill";
export const id="dl_5f5122880d1e4d619ed3";
export const url=new URL("../icons/rows-plus-bottom-fill.svg?v=18dd896640011c6018bae57d876d978f5c8802772ffe71074bbfe186f5482a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
