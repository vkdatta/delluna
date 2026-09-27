export const name="smart_outlet-fill";
export const id="dl_e899157fb02301b26eef";
export const url=new URL("../icons/smart_outlet-fill.svg?v=e488532ed6a1506b23d1cdfecd5a08615535b8afbe85cb97ab1624c23a106b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
