export const name="folder_special-fill";
export const id="dl_9ff2bbc48922068052d0";
export const url=new URL("../icons/folder_special-fill.svg?v=d7c0f5821d56d2bfe952809926ce8cd8a2e68eed17097cdca75b81e4df1b8c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
