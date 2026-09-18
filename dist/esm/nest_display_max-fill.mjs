export const name="nest_display_max-fill";
export const id="dl_8c3fea708e1846baacbe";
export const url=new URL("../icons/nest_display_max-fill.svg?v=cac21dbc2fd2c65c54572a198dde22c943863f460824aaa0f10097d839d49ede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
