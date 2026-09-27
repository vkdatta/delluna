export const name="book_ribbon-fill";
export const id="dl_dd698f6186e2afbd6d1b";
export const url=new URL("../icons/book_ribbon-fill.svg?v=467f34ee99b270f44d2fe514325c8929c58a8538426a7e359a1718d4c39eb2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
