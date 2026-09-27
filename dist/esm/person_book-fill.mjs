export const name="person_book-fill";
export const id="dl_96aa7e79294e646f4dd5";
export const url=new URL("../icons/person_book-fill.svg?v=42bfa3da4f2d93337f4bf883f204f56c70f2c1fd8546dcc191bcce85557005fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
