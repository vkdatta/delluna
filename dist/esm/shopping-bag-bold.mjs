export const name="shopping-bag-bold";
export const id="dl_276805397db31d44d55f";
export const url=new URL("../icons/shopping-bag-bold.svg?v=2c7d0fb4dda54ddb15422c3cfb0011d79e926312ac340aa6283757ae0e629611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
