export const name="address-book-bold";
export const id="dl_824c0073a7cc4cb28a7a";
export const url=new URL("../icons/address-book-bold.svg?v=a6778173582d585c933b784f48a814d0c329edd66ab553ca50bf70e773788713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
