export const name="shield_card-fill";
export const id="dl_378ab19f0dc5b3a01568";
export const url=new URL("../icons/shield_card-fill.svg?v=3db0c2ceb4354a9c1cec858cf27e34fae40b92df5b343cbe25678cfdb60c1637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
