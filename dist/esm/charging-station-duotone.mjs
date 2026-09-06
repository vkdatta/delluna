export const name="charging-station-duotone";
export const id="dl_45731072fbbc48adb8be";
export const url=new URL("../icons/charging-station-duotone.svg?v=ca774df5cbdec86b95585d2d17e8bdcbf74cf27a9dbdb7cde0792e58a93d7ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
