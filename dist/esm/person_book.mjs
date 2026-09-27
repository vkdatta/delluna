export const name="person_book";
export const id="dl_0d33281b83981607580d";
export const url=new URL("../icons/person_book.svg?v=7469063ce6e93eb713265d61ae264455451dd81bf968d62ac5a53aae97dfcb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
