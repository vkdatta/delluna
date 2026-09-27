export const name="receipt_long";
export const id="dl_f15455f37683cb5b951f";
export const url=new URL("../icons/receipt_long.svg?v=2d1e3f53bf300831acbe9ee1933f02d07a407fe58eb9df2ca5f2ba7e129d3931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
