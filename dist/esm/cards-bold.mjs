export const name="cards-bold";
export const id="dl_2926dd68739d4d39991a";
export const url=new URL("../icons/cards-bold.svg?v=2fefb86ee030476008590003cdef547ac68f5dc0699c0da63970cd31c17daac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
