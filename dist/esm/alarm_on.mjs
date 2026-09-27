export const name="alarm_on";
export const id="dl_645fb3ffaa90d2e7b4fa";
export const url=new URL("../icons/alarm_on.svg?v=564a2186ef7f04c0e38dbe5ccb9788028fc67501703dc5df44f639983705878e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
