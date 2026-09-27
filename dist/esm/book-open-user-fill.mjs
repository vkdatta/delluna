export const name="book-open-user-fill";
export const id="dl_0ecea526da324ec7adeb";
export const url=new URL("../icons/book-open-user-fill.svg?v=ce1b61d301ce0fb5138153fa4535e343163257e69f61c61cd78f1e9b14eb9a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
