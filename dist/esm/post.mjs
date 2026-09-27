export const name="post";
export const id="dl_a037b59e2e2dc39a1a03";
export const url=new URL("../icons/post.svg?v=b5675506f94c87652551b2520949b192bb29c8ec461ec3be680f0eeb651f5114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
