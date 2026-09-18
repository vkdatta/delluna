export const name="page_info";
export const id="dl_84b9c51ffbf042c9b701";
export const url=new URL("../icons/P/page_info.svg?v=995a0fa3ef0ea5aff588add9f75a634d8ab8b4994b7b9e610805a223d9c087fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
