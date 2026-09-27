export const name="address-book-tabs-fill";
export const id="dl_a5180af2d61648f19888";
export const url=new URL("../icons/address-book-tabs-fill.svg?v=348583cbce52ca7abcf30a2b4966c7f1171715757dd970a661ef5b1daf0292a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
