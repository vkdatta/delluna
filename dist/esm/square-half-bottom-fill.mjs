export const name="square-half-bottom-fill";
export const id="dl_db6d4d9af80b41968226";
export const url=new URL("../icons/S/square-half-bottom-fill.svg?v=d21696fd776e6b8804ff75cfd8d5665adbab340f4100dff441051eb009435771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
