export const name="books-fill";
export const id="dl_5fb3fa5593f84d4eb39e";
export const url=new URL("../icons/books-fill.svg?v=3356366a509b58bad60184d97905164e6842b3eba43e6db2d9da3aae79b859bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
