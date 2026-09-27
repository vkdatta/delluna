export const name="watch_vibration";
export const id="dl_51683e090f2ce6bdeff0";
export const url=new URL("../icons/watch_vibration.svg?v=dd2de18a3832fd33bac037ca4c098cf9396da92923d79366e14a7a26aa811385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
