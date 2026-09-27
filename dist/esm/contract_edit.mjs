export const name="contract_edit";
export const id="dl_3575d2950a065c03047c";
export const url=new URL("../icons/contract_edit.svg?v=8827b7fd051f953c3c0876b8fd6719ea4c5bd909f8cdc0445e275abd67c8c07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
