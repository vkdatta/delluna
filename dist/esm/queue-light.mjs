export const name="queue-light";
export const id="dl_1aeb31721c4d462fa682";
export const url=new URL("../icons/queue-light.svg?v=3def7828743441e12bec2f142efac11e5621c814f9a01e18ff04979e20d6b513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
