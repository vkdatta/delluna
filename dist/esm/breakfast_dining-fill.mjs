export const name="breakfast_dining-fill";
export const id="dl_f360090d392bfcd2e5a3";
export const url=new URL("../icons/breakfast_dining-fill.svg?v=baf8bedefe20c9866fe8b183d2aca99b4007ca31fca876e20082922a45a994ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
