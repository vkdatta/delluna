export const name="article";
export const id="dl_0d7d9803b937412286d3";
export const url=new URL("../icons/article.svg?v=25d8411c49a9f4b7ddfcb592dab55be0f817c53908f96b3012681bc1e19cc207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
