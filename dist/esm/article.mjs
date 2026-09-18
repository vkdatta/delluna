export const name="article";
export const id="dl_0d7d9803b937412286d3";
export const url=new URL("../icons/article.svg?v=b0c7b7b69e7de4f4c09cdce42e4bdbbd67f5c9bceffb245caa0ff51eaf592bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
