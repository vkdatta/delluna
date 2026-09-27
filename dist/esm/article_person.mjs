export const name="article_person";
export const id="dl_6ce63815be563fb3a97f";
export const url=new URL("../icons/article_person.svg?v=759b6bfb5956cacd5aad0ee35b1525a25177cc7b06cb429d46bb82eda15b3593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
