export const name="orders-fill";
export const id="dl_26de9d07c353d5201bcd";
export const url=new URL("../icons/orders-fill.svg?v=0eeff29cae9e5a6bf14cc9836b0b1e6c09d9cbaf0fd6884723e21f9a2a7af031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
