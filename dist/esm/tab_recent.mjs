export const name="tab_recent";
export const id="dl_75d461cb59cc247820ca";
export const url=new URL("../icons/tab_recent.svg?v=53d8b5be68e8241d0a59d3d6383943431c32d4d7a8b8c4e757886abe2b4914cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
