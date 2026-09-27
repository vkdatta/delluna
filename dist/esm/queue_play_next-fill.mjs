export const name="queue_play_next-fill";
export const id="dl_596d112c504c118c0771";
export const url=new URL("../icons/queue_play_next-fill.svg?v=d16d3691a35d17b4fef1b5e30788e48f62544889760b3bb766a744dac52c3b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
