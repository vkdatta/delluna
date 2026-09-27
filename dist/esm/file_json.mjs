export const name="file_json";
export const id="dl_d90c0cae318d2b1f1403";
export const url=new URL("../icons/file_json.svg?v=cbd3573f8a1eea6da41a0b4781c0023364a0066430baed7af999cb2d83e7d3a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
