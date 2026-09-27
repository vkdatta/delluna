export const name="folder_copy";
export const id="dl_8b1a3a855e809398ca11";
export const url=new URL("../icons/folder_copy.svg?v=b256d47303d76e374ac022933a085a850f8ce32122d273cda3c27cbfe5693835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
