export const name="address-book-light";
export const id="dl_7a9681572a334d3a86b0";
export const url=new URL("../icons/address-book-light.svg?v=ec6da59edeb0da759d961bbe255e71b30f278387d64527c7534bbd8ec656464f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
