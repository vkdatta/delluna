export const name="rebase_edit-fill";
export const id="dl_d493dce740f54a78be2a";
export const url=new URL("../icons/rebase_edit-fill.svg?v=af74441296150ecaf0fd2368a072080e48505561b578e44416eb0cdf50c38f1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
