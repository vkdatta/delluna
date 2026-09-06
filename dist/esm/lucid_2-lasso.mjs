export const name="lucid_2-lasso";
export const id="dl_ef4a38ccabad4573952f";
export const url=new URL("../icons/lucid_2-lasso.svg?v=98c505ee0c81fec95764c9e655d4597fa34a1d69d61b3fd987aeac285a10a4aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
