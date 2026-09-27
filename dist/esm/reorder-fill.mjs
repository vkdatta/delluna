export const name="reorder-fill";
export const id="dl_7acaa011435e702c7f89";
export const url=new URL("../icons/reorder-fill.svg?v=d9a5a4f46dc44aa070f2fd7b5a03457a2e127aca7ec3984561bdef274daaec3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
