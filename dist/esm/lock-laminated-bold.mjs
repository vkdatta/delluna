export const name="lock-laminated-bold";
export const id="dl_f8645f73505241b7b38b";
export const url=new URL("../icons/lock-laminated-bold.svg?v=f4cfe131a4506e8c0db6d9f19931f81f0a4213dfa639de7dcd42e8387f9bc2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
