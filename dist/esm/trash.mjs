export const name="trash";
export const id="dl_5827698eb5c1e796076f";
export const url=new URL("../icons/trash.svg?v=9a95df31d2035bac12ae0388e38c7308a89bcf4f822ac4e8c2b078ee01f97d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
