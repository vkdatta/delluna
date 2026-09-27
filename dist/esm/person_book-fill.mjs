export const name="person_book-fill";
export const id="dl_2a989346364654f3e502";
export const url=new URL("../icons/person_book-fill.svg?v=aad66892aa8e3fba8b6867590628564391183fcfa8e448f7a0cf67e2e0abd658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
