export const name="add_comment-fill";
export const id="dl_23d32af376614e2fbdd0";
export const url=new URL("../icons/A/add_comment-fill.svg?v=56b09ed8364980361af44acb4c9ad8b6ffa460b6398e621803cf3138babb3aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
