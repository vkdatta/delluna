export const name="table_convert-fill";
export const id="dl_0a5df804b48ee6502301";
export const url=new URL("../icons/table_convert-fill.svg?v=25a5fce5c13f75812243331fccddeba445c4d5d7ee12fc6bad40bd422be7243d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
