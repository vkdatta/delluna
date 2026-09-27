export const name="lucid_1-book-marked";
export const id="dl_5381806f8b764150b3a7";
export const url=new URL("../icons/lucid_1-book-marked.svg?v=bafa22d1980eac02ec0019e886f5066849f3e5c12c3fbece397737204977a1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
