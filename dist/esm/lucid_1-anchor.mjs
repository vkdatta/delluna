export const name="lucid_1-anchor";
export const id="dl_b16c2fe01cb14698a9fc";
export const url=new URL("../icons/lucid_1-anchor.svg?v=5e1970107517e572631edfebd6dcb0f2d1e41232d7f8f2918e54b4b9a5de4d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
