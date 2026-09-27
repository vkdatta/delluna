export const name="favorite";
export const id="dl_e2b10ded03253df54fdd";
export const url=new URL("../icons/favorite.svg?v=18621c846aa51624cd4e2b628e81c14aebce9d5c060f1241d726025eab222d61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
