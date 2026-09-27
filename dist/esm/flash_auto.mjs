export const name="flash_auto";
export const id="dl_bd6585a85773a4149c39";
export const url=new URL("../icons/flash_auto.svg?v=2f7b23ab36100c4f7a7a199b61197ff93cea8ccff71f03a7acfacdf76f951468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
