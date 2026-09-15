export const name="calendar_lock";
export const id="dl_632e3bb76a7f42a5bddd";
export const url=new URL("../icons/C/calendar_lock.svg?v=c79c80e12145078908d432fd1f4db398e5ea0ee1dfea322c17d8e1ef2bd5a55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
