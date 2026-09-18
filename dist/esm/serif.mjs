export const name="serif";
export const id="dl_29d25a21636b4dcf93b9";
export const url=new URL("../icons/serif.svg?v=a72ac96c236aca2e0a1eb7bb5f8cf1309f03811d243460a4e514b7beaaecb78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
