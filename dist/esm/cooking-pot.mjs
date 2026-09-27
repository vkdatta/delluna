export const name="cooking-pot";
export const id="dl_91ecbff169314cbab0e0";
export const url=new URL("../icons/cooking-pot.svg?v=0fb6d14b750c2b2dcf75a9471dfd076dafa5042c6d733c208dd2d8aa51a6a98a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
