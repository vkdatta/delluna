export const name="comment_bank-fill";
export const id="dl_49eb230dcf6f44909141";
export const url=new URL("../icons/comment_bank-fill.svg?v=bddb55c3330d09089ef8e0024fe67043de3e71638a3a39faed4d7348631dedc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
