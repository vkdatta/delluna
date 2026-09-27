export const name="bottom_sheets";
export const id="dl_30ba198b4bb55be1cafc";
export const url=new URL("../icons/bottom_sheets.svg?v=40b8a16289a0d53d1da2310863d85baba03025026a8057828e0962e3f12eb9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
