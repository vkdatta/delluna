export const name="lucid_1-bitcoin";
export const id="dl_725fec57d0ed44d2a027";
export const url=new URL("../icons/lucid_1-bitcoin.svg?v=7a3173f0d1b9620cd7f56edb0fe9c7f9cf231b7ba0b5859edbb0ee1908f90f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
