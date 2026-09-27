export const name="lucid_1-book-a";
export const id="dl_b8afb50b43534e00af47";
export const url=new URL("../icons/lucid_1-book-a.svg?v=2abf07cfaff0bb354be11b98713215529267ee3b1b0402bf6d9b44c354e2dc73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
