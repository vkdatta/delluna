export const name="markunread_mailbox-fill";
export const id="dl_e6cc42e223372810b905";
export const url=new URL("../icons/markunread_mailbox-fill.svg?v=21622522b4d607532efb9ec591fb9bef5e991d77cd76e6c81d127b6a47a35c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
