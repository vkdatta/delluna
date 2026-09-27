export const name="lucid_1-a-arrow-down";
export const id="dl_99e16fe3de054ba595f1";
export const url=new URL("../icons/lucid_1-a-arrow-down.svg?v=cdd615db57707ffc452f9b5c8706a30cf8e5624ddb6bcebc10fe67e562263097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
