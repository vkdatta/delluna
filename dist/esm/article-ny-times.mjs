export const name="article-ny-times";
export const id="dl_ac5b227d0b154ad6b2fa";
export const url=new URL("../icons/article-ny-times.svg?v=9e50c97dfa62c82e380292a1765c2fac17e8807b6c2214617eb6fcde683ef057",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
