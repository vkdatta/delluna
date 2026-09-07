export const name="books-fill";
export const id="dl_5fb3fa5593f84d4eb39e";
export const url=new URL("../icons/books-fill.svg?v=308aa85d7c0f3aedebc77ac3a3dff0ac47d5957a4cd80f5a134304300ce8a138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
