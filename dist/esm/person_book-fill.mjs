export const name="person_book-fill";
export const id="dl_ea15d6e2f185ba24e7c5";
export const url=new URL("../icons/person_book-fill.svg?v=555b8c7f319cf7bff371127ace1a6fc09d188240fdea24df098266ae5efb13ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
