export const name="assignment_add-fill";
export const id="dl_7f4edfdc41274b4abcc0";
export const url=new URL("../icons/assignment_add-fill.svg?v=36c2bf362f63e2d0b0ff349f655da78877b173fdf6761d04e4e9e193a76c70ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
