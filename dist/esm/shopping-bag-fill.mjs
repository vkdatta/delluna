export const name="shopping-bag-fill";
export const id="dl_a513cb3e83e5cab7c4e2";
export const url=new URL("../icons/shopping-bag-fill.svg?v=860b5b83dc5ea1525f3e66b30ac78bed46e3026037537f1e5624dcecb0d59c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
