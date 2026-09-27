export const name="border_horizontal";
export const id="dl_8ea974fca6b94a193a49";
export const url=new URL("../icons/border_horizontal.svg?v=336e883ff75528a82eb08bdc6e19d4b70719962afa50b1ea30e0e75690090db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
