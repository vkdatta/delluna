export const name="perm_scan_wifi-fill";
export const id="dl_ac77cfc728ab4eecb53f";
export const url=new URL("../icons/perm_scan_wifi-fill.svg?v=68534391da64750d060a8ea62d01c15ccd5ac0720e383b8c0d2f0b20fb64cf8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
