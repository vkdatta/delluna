export const name="arrow-u-right-down-fill";
export const id="dl_cf6198fd44e24d2fb944";
export const url=new URL("../icons/arrow-u-right-down-fill.svg?v=2de4a35384ceca7229af95348c96074e2aa30d37b12ed57592a797fec1cb3e07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
