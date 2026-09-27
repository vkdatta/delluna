export const name="timer_arrow_down";
export const id="dl_92e882db9c40b7a52414";
export const url=new URL("../icons/timer_arrow_down.svg?v=b3a9982f8249dae1d16330886363a4fa1945b4ada947a5ee57c9e325afc5f093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
