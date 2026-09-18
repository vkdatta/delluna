export const name="search_check-fill";
export const id="dl_bcbf3cd171de4cd38147";
export const url=new URL("../icons/search_check-fill.svg?v=7bfa7c85a9f00b87312aea0a6623db13e26a54a06447d3c9a6c94102c08a6283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
