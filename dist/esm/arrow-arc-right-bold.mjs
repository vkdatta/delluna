export const name="arrow-arc-right-bold";
export const id="dl_4287c4e8e0b04ca3b3d2";
export const url=new URL("../icons/arrow-arc-right-bold.svg?v=663ab291ed753976986f00c90aeeeaf8952ff502d2715d66b30ba2f6755fd186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
