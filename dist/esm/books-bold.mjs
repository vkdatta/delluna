export const name="books-bold";
export const id="dl_62e8831aef034400956c";
export const url=new URL("../icons/books-bold.svg?v=8c3cda104a07fb6458baf0f9c053a3eb4a5f98d21b670407fbd14bc9c67ec288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
