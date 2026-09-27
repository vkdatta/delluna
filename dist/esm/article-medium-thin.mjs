export const name="article-medium-thin";
export const id="dl_a85097c2b0f84b028cc8";
export const url=new URL("../icons/article-medium-thin.svg?v=f5f6ccef4589d50956d1244c6315cb4d2899e7fd943ac32bedfc91d05c85678b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
