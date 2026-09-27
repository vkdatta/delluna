export const name="tab_search";
export const id="dl_379c7e12efa13c440b08";
export const url=new URL("../icons/tab_search.svg?v=d53ced4ae7ee4ad4c10d5ae98906254ab98db168096983448785970c6408af94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
