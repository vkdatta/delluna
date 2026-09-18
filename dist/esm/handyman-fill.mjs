export const name="handyman-fill";
export const id="dl_5d695dabe74346f7958f";
export const url=new URL("../icons/handyman-fill.svg?v=c44a95c89b51aaf4d8bbe69ac29144ae6e823837ce4f44a92361410fc59777a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
