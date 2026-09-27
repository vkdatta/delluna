export const name="filter_vintage-fill";
export const id="dl_ee9b817d25cbb0a26eef";
export const url=new URL("../icons/filter_vintage-fill.svg?v=cde6cdde335a8f28603dee9bc1118107594d964f38e0cbdfb348d8f2f78cde8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
