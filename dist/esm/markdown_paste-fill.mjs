export const name="markdown_paste-fill";
export const id="dl_d54337297b0647458003";
export const url=new URL("../icons/markdown_paste-fill.svg?v=2af2fbfefc7bbd897fe3ecd84ffd76f3a29b6d72e0a94e34d0ce7c98d2b3c90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
