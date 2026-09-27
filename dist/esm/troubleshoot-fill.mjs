export const name="troubleshoot-fill";
export const id="dl_8e89492d99af4394a297";
export const url=new URL("../icons/troubleshoot-fill.svg?v=8f62719b05971c9b23f98cdd94bdcd6177e4d3be387de4d0ab971ace4dda2326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
