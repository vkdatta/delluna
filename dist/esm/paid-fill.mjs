export const name="paid-fill";
export const id="dl_b783e38b7b5a198c16df";
export const url=new URL("../icons/paid-fill.svg?v=0e26dc306f065f1ddd9a75a28d34d9beb2b4cbb44ae4a13a6d3995e5cdc6a1ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
