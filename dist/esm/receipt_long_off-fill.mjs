export const name="receipt_long_off-fill";
export const id="dl_8fc4b7c27e73da8fdc8a";
export const url=new URL("../icons/receipt_long_off-fill.svg?v=2ecf323bf804be765b6d9ffef2f6495119e322f0286c253b921d6482ff2d71c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
