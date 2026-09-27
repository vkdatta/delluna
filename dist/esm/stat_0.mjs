export const name="stat_0";
export const id="dl_d8d0526b3b3cd01bc317";
export const url=new URL("../icons/stat_0.svg?v=8236d6cc808fd6ba53fcef7cab54c9d5e0ea333a0ee087e6660a99abab1df923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
