export const name="bluetooth_drive-fill";
export const id="dl_13c69c53f7fc4a61ad41";
export const url=new URL("../icons/B/bluetooth_drive-fill.svg?v=f3e57dcfe554874979900da591afee577c93b99ccbd095800d94e23a3e2c348b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
