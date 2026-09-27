export const name="text-italic-fill";
export const id="dl_d43ae89bc772dbe058ca";
export const url=new URL("../icons/text-italic-fill.svg?v=10eefda49dab8d26438468c7dee02db84bfe110a4a1ea71ebeaac65d48d290dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
