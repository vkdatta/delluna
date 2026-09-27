export const name="lucid_1-clipboard-check";
export const id="dl_16f82d082e5a4012b382";
export const url=new URL("../icons/lucid_1-clipboard-check.svg?v=ee069788e7b2152720b579888d4b10447f4ea982c4bc86919909e829b8217fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
