export const name="contract_edit";
export const id="dl_4f493753894444339240";
export const url=new URL("../icons/contract_edit.svg?v=9b0c4dbd77f4e52c202cbd87dbbf935b045f1e82c72c5605ab0b4c33a853fc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
