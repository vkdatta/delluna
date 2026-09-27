export const name="12mp";
export const id="dl_7e89b30959a9296fe090";
export const url=new URL("../icons/12mp.svg?v=336ba174107be97e7531dce960b6ea7fae411a6a0089df5cf9fe4d30ca433076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
