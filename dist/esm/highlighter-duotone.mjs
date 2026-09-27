export const name="highlighter-duotone";
export const id="dl_12ed7ec3442a4bfab81d";
export const url=new URL("../icons/highlighter-duotone.svg?v=906c6b5a7c8c63f2821b8d1aba2a00aabeca529ed543b8db796c0e076121a1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
