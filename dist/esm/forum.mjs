export const name="forum";
export const id="dl_73f02452a2d927fb326f";
export const url=new URL("../icons/forum.svg?v=1636179b9442743983e4496248afd5b56748b962bbd1279fcf1c71a124faa724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
