export const name="zap";
export const id="dl_b7554e601ec84c9dba78";
export const url=new URL("../icons/zap.svg?v=5f840d2effc82ba4a82f7f9f792a30135db8ad012f4d6848f88a5e694f8d08ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
