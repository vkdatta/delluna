export const name="alarm_on-fill";
export const id="dl_5b6e4febf50975b399ea";
export const url=new URL("../icons/alarm_on-fill.svg?v=9011fe9aa4e3390cf660da1aa55a9d3fe96a5c90bd002ff9f313861ddaf55372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
