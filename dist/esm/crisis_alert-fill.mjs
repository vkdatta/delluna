export const name="crisis_alert-fill";
export const id="dl_e76a3ffc3cfc5fc777e9";
export const url=new URL("../icons/crisis_alert-fill.svg?v=2d268d52d895975e37f503567e16734c5f7e56d778f67244c08eda5f06d0c5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
