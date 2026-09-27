export const name="lucid_2-line-dot-right-horizontal";
export const id="dl_e0e3ec700ef84fd79a98";
export const url=new URL("../icons/lucid_2-line-dot-right-horizontal.svg?v=c4ed9eeed33d31d5bcd879c3ab2aa8cc5bf63e2bd7dc01088d648c2a46334848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
