export const name="clover-fill";
export const id="dl_4507b772bdbb4bbc8425";
export const url=new URL("../icons/clover-fill.svg?v=b511caa7b8fdedd27303fe796e9cf93f21a226e36fbb6a5c6c07c0e8e13a6be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
