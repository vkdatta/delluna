export const name="lucid_3-square-arrow-out-down-left";
export const id="dl_352cd52442f04bc1a4df";
export const url=new URL("../icons/lucid_3-square-arrow-out-down-left.svg?v=2ba6ec5c2e2317c0ceb57f9804a01839d41d20e0e2ae13c930ff7b3a28d0102a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
