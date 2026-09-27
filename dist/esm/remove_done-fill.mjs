export const name="remove_done-fill";
export const id="dl_36d0d6b1691565946b79";
export const url=new URL("../icons/remove_done-fill.svg?v=9e38db27578fb7d58969a360417970e0a0615c27a7028a6f4c6f9e54c7734340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
