export const name="database_search-fill";
export const id="dl_0f58901ea6474caeaf51";
export const url=new URL("../icons/database_search-fill.svg?v=ba6f6fdb3cf52e761e05c7806df2811c053b7e1f4c745af6f140f61cf5fad3bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
