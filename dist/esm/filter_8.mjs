export const name="filter_8";
export const id="dl_c712169cec4400806b89";
export const url=new URL("../icons/filter_8.svg?v=68acc190bacaaf04433ff59ed71c6ca8fd742d449076fe3e7c1dabcd85e0d59c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
