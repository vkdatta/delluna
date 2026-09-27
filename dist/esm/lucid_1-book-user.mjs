export const name="lucid_1-book-user";
export const id="dl_4a0e580a7c904da8ab19";
export const url=new URL("../icons/lucid_1-book-user.svg?v=0252c1d0492ffbb37bbe2e8b0a98f7a01529e44394f9d0f6ee41ead10b30a5e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
