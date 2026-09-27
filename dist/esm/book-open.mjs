export const name="book-open";
export const id="dl_351bba19e1eb4e6e8389";
export const url=new URL("../icons/book-open.svg?v=d777f910874871f2ed3a9f38a262cd39f776e3eb1ec517f84b90ff22a11d0e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
