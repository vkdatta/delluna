export const name="add_circle";
export const id="dl_6bb3fb59db4a3d670c2f";
export const url=new URL("../icons/add_circle.svg?v=abf040ee0f19fb8d5f1028a0d2185911e15b4bcbdd2f200983144885946cf389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
