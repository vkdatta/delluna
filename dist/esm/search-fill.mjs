export const name="search-fill";
export const id="dl_1789d2088baf343933e9";
export const url=new URL("../icons/search-fill.svg?v=5c0cf4822308c0e564a67ee27fee0e5971b15c0c83b802a6f65a78209757cba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
