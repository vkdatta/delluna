export const name="book_ribbon-fill";
export const id="dl_c0ac90fd037ac575db61";
export const url=new URL("../icons/book_ribbon-fill.svg?v=0a69e495f05af6bf2ed0b99b1b4850455064962ae3dfe4abd35332f3c338d8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
