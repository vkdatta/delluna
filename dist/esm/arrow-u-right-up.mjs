export const name="arrow-u-right-up";
export const id="dl_db7a19aa14904a31842e";
export const url=new URL("../icons/arrow-u-right-up.svg?v=e983fc80bf7df5620e043ff2de7a902dc17891e15c9f3011d8a670fbca7df85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
