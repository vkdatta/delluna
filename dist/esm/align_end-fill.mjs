export const name="align_end-fill";
export const id="dl_63323daeb09e95a1f93c";
export const url=new URL("../icons/align_end-fill.svg?v=30c6994f36afdbd183620630dd89e8c694f6d4c92bd951a8c1954fb9880507bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
