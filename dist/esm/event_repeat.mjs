export const name="event_repeat";
export const id="dl_f8957165ce21df1e4433";
export const url=new URL("../icons/event_repeat.svg?v=cbf9c82bc908d334a96a294f407edb2580cb0d37aeca856ccc8caff8af6d1e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
