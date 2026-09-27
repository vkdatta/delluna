export const name="article-medium-fill";
export const id="dl_b04af60376bf4ea18fec";
export const url=new URL("../icons/article-medium-fill.svg?v=264ca09bc57f94a3bc34855f638f555fcb78f84bf81333e17e06326ceb206f02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
