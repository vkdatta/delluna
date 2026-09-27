export const name="amend";
export const id="dl_d4fc7f69238e326ae937";
export const url=new URL("../icons/amend.svg?v=63f429c482bae0db2ca55e6bb4ae6e9aa1ff1a93b7ee2024487db80abf17ec54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
