export const name="comments_disabled";
export const id="dl_7003a6a7eee378f5d852";
export const url=new URL("../icons/comments_disabled.svg?v=1d13ff882299016aa240a9a5c9f4e90f67172b69bc0293b6c9cd8fccc7450652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
