export const name="book_5-fill";
export const id="dl_64c317feee12e05ddd68";
export const url=new URL("../icons/book_5-fill.svg?v=5828bf014dd9d1c5ddcf77474e182303c13c48808f51fc0879bb99822291a966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
