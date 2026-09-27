export const name="table_rows-fill";
export const id="dl_f515346f85a63f96183b";
export const url=new URL("../icons/table_rows-fill.svg?v=cbb957606d016e0beb14472df588652272c575ed653502cc68664ab996a74f2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
