export const name="published_with_changes";
export const id="dl_564499a4a00531002e1e";
export const url=new URL("../icons/published_with_changes.svg?v=4f03718a300d5b4ba6dbe002c3de226be2af0189b147376dfa368c06cbd0df7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
