export const name="books-light";
export const id="dl_2b44a6e91a9240a8862d";
export const url=new URL("../icons/books-light.svg?v=e10b40f21931ffbe2544ae287f6e32af39562dfde16cb001fe578f82eceeb0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
