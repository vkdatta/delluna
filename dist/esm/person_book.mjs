export const name="person_book";
export const id="dl_350d3247ef144fee85cc";
export const url=new URL("../icons/person_book.svg?v=19aadc541afadb6fae9429791a7aa426ab119777ee9d6d4a52500088abe984fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
