export const name="thread_unread-fill";
export const id="dl_efd6fbd6974aa326fa2d";
export const url=new URL("../icons/thread_unread-fill.svg?v=f56ca9775dd0c3fef481816ba546c8bece15165f326411d44d0d90f1a21baae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
