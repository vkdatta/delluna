export const name="receipt_long";
export const id="dl_8d0bd6a99af0b601e6c5";
export const url=new URL("../icons/receipt_long.svg?v=bf47f6bcb2ef3a9a14661323c1fe8b727227903ec19b7b938143df5a1c5c2590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
