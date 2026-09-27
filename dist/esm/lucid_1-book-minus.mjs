export const name="lucid_1-book-minus";
export const id="dl_d2f6d0dd91cf4af8a445";
export const url=new URL("../icons/lucid_1-book-minus.svg?v=e913ef3d8ceab5d169522aa09725a461855489d9d11ea0df1e63b3648352d951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
