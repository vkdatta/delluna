export const name="square-dashed-top-solid";
export const id="dl_506e73030ea841718898";
export const url=new URL("../icons/square-dashed-top-solid.svg?v=717daf7b5ad930d478022a710beebd47e7f57af066770b8954aead1e3b9ac19d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
