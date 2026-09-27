export const name="number-seven-duotone";
export const id="dl_8d1a62b5d5f3450b8312";
export const url=new URL("../icons/number-seven-duotone.svg?v=1708d7aa25ff01c94736e962057e78d8df6f7ee1692e227fd8cc23179f5b5644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
