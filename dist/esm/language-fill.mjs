export const name="language-fill";
export const id="dl_f3a5f8111cf046c48286";
export const url=new URL("../icons/language-fill.svg?v=1da516decaf78057257d2ff66c0e39d7136f3f6b66d9fb4aa1aac0c534cd5fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
