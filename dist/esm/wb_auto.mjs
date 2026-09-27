export const name="wb_auto";
export const id="dl_eb5f0c5c6b4182eacb02";
export const url=new URL("../icons/wb_auto.svg?v=a12b34e1c05ab8d4c16869d1a7ae9d16293c6330065e966563229c20b9df5fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
