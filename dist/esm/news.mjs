export const name="news";
export const id="dl_f8cb999dcb57b7748fb2";
export const url=new URL("../icons/news.svg?v=0eaa8b35c4bb0b86708f37a552020b6ac78f1cf8a49e15c98fed6be69950f84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
