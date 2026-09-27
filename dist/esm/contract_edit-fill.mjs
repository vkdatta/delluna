export const name="contract_edit-fill";
export const id="dl_3e8777a4e741b8770132";
export const url=new URL("../icons/contract_edit-fill.svg?v=d3b93d60155c57f5780ee380a6c23d26a9b1a5504d4249b64a8b12b2e94d04fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
