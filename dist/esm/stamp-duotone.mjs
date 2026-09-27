export const name="stamp-duotone";
export const id="dl_d6a0d5518d7d0106dd23";
export const url=new URL("../icons/stamp-duotone.svg?v=3f3a468fd6cce9a5e38881d57afd56c5dce4c5c5ee424eb0130e3b6af8319c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
