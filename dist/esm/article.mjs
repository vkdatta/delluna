export const name="article";
export const id="dl_816749cda3b52ff14e4a";
export const url=new URL("../icons/article.svg?v=7b5f1afdac543a06e1dfc749efa4fc94025e9c6877cd6eaf0ea5cfffee400c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
