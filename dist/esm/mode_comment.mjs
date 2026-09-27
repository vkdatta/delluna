export const name="mode_comment";
export const id="dl_fcd42e7d8c9ad88d4968";
export const url=new URL("../icons/mode_comment.svg?v=744acdda80dd1df15099e30a087ed205e57919cccb94b10db6621747cc5d8c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
