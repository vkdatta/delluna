export const name="text-italic-fill";
export const id="dl_409165cd0d19ac29d58c";
export const url=new URL("../icons/text-italic-fill.svg?v=f1de6666ab29d5328361925a0226a90bdab3e478ec87116f89052df3adbbe052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
