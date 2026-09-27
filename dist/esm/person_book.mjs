export const name="person_book";
export const id="dl_e3e10622661eb4b6009f";
export const url=new URL("../icons/person_book.svg?v=760fde78084cd5678bcef4565b6819acfc51a4267c16813b57aedcb6bdde8a9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
