export const name="paypal-logo-bold";
export const id="dl_c2783a34f1c24ba190bb";
export const url=new URL("../icons/paypal-logo-bold.svg?v=af4fdfb7f90588354a42e28de441d025b39fd385c03bf8bfe778afbbdfdf5bd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
