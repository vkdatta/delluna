export const name="not_accessible-fill";
export const id="dl_7b85af4696c49f480116";
export const url=new URL("../icons/not_accessible-fill.svg?v=8d1480f5291a1753f63a6f1a095846bcc8c59bc7c38a7133f6ab570d3740edb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
