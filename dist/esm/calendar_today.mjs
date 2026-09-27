export const name="calendar_today";
export const id="dl_41fc5564ad497d04de63";
export const url=new URL("../icons/calendar_today.svg?v=1aa30ccac7bf7913cd269828e564ce2be486d0555248a05a4341f606b2035012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
