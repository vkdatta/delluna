export const name="9k";
export const id="dl_d1afa5109048382bb226";
export const url=new URL("../icons/9k.svg?v=e972c06cdc0dd286ae08748fc7d15627c443a9f609e65d0f64d0e2ce4f27b49a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
