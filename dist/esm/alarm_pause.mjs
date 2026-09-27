export const name="alarm_pause";
export const id="dl_8a5ef4029d987bc330db";
export const url=new URL("../icons/alarm_pause.svg?v=8b4e9d2bc71eac19f470ac5c573fc011cf84b9003580f243f824c119d5230eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
