export const name="lucid_2-grid-3x3";
export const id="dl_602e1a5272a44fa4bddf";
export const url=new URL("../icons/lucid_2-grid-3x3.svg?v=0a0192537264d8d9aa24f1f2ada5a6a050c0d30b0fb496b123d1ed6d7b8dbd25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
