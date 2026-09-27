export const name="greater-than";
export const id="dl_f94dceaecbd446ff92dd";
export const url=new URL("../icons/greater-than.svg?v=78187049fcb9121cbf510b75b9b14cc152a198130c58bcb4eb1b63787b6d760e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
