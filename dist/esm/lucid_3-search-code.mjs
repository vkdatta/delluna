export const name="lucid_3-search-code";
export const id="dl_e422ed7d46694499aefd";
export const url=new URL("../icons/lucid_3-search-code.svg?v=ef315ca5ae8a011d7590b46ed9d54b8a7c7a3f161c00f3b0fad5013c3ad08ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
