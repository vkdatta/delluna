export const name="filter_7";
export const id="dl_893ef7cc723e8ab82242";
export const url=new URL("../icons/filter_7.svg?v=50d935eb1fd022326f4cdfb43e7d655e67546d2bb9aa5e5e50a38eb595a5bcd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
