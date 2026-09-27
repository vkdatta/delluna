export const name="lucid_3-parentheses";
export const id="dl_3ddc25374b50446dac7c";
export const url=new URL("../icons/lucid_3-parentheses.svg?v=7d8d677a6e7da1e948106491276d6c53a534110a8c844974759e92d623100e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
