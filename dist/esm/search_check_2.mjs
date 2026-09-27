export const name="search_check_2";
export const id="dl_2a551c0538bb7876cf3f";
export const url=new URL("../icons/search_check_2.svg?v=c3091d13648a4db48c00c0cfefaba84ace9a2dd3a05ae21b1157863a24db78a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
