export const name="rainy";
export const id="dl_3b0e79892d554839bbb8";
export const url=new URL("../icons/R/rainy.svg?v=96af53328bdb9c7f4c5d74e95e7fb21f5744f5d09f1569b0d4c983b32d1614fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
