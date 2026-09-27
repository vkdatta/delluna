export const name="comment_bank-fill";
export const id="dl_92c9b5729c999c09e88d";
export const url=new URL("../icons/comment_bank-fill.svg?v=67dde525383d5a583eebfb7ff08b2d563a9f615663354acf96558117a7da2153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
