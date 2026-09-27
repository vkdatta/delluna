export const name="lucid_1-archive";
export const id="dl_cc17b59a554a4470abe9";
export const url=new URL("../icons/lucid_1-archive.svg?v=8568fc11c6ecded3f0cf88afdc6fe8348765f2711074384bda5c3c05fae128ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
