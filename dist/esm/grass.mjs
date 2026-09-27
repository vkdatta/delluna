export const name="grass";
export const id="dl_bb01d7ae520a86b4cfb2";
export const url=new URL("../icons/grass.svg?v=fa436220a7dd010722d833c9fa2059512ef8cb5f5e534e81421107a45cfd98d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
