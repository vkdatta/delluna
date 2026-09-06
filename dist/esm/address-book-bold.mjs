export const name="address-book-bold";
export const id="dl_824c0073a7cc4cb28a7a";
export const url=new URL("../icons/address-book-bold.svg?v=e65000c2103af91ef5fe32f2480636f7bc06a64f52cb37530da6dccc9e004109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
