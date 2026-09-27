export const name="book-open-light";
export const id="dl_f2d44744a56b40f4a1ab";
export const url=new URL("../icons/book-open-light.svg?v=7007d8119507a3b0ef42bf56c0d8f69247ee1aa4e8117aa1abc77b8c0f627625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
