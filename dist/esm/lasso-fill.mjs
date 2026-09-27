export const name="lasso-fill";
export const id="dl_8750d1f50b774b5a93af";
export const url=new URL("../icons/lasso-fill.svg?v=da4e93229d67140651bf16820f581d78324c487bfa59b7093ce91a9fa2424675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
