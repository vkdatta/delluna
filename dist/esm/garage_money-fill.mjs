export const name="garage_money-fill";
export const id="dl_aa1da52c01e36c5bf1cd";
export const url=new URL("../icons/garage_money-fill.svg?v=1c3ca66c77ab16fa6bcd1a41bc5b896c9e8184ca6aeb70074f28b29a2f230aa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
