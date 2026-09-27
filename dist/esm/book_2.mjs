export const name="book_2";
export const id="dl_8c29c076ff8b018ca61a";
export const url=new URL("../icons/book_2.svg?v=9ad8e398d922ae84efabf0540090abce2bc8782e3b7fb9ca7ff1c5d64d88f126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
