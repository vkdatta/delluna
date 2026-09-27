export const name="watch_wake";
export const id="dl_688585b8162647896672";
export const url=new URL("../icons/watch_wake.svg?v=98fa12bf08bacf61c137f75ec357f8e6d73471e9676979e94c91812c1749e6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
