export const name="tooltip_2";
export const id="dl_8171ecbcb4ae3298a531";
export const url=new URL("../icons/tooltip_2.svg?v=b599773a0e97e495dc6f2f6b7cc402c6b3c7c7c07923017e27ceda05fd66ace6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
