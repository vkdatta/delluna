export const name="alarm_pause";
export const id="dl_b7f2f98e0d8aaad23394";
export const url=new URL("../icons/alarm_pause.svg?v=f0014cae04a6e3424a73c2361b7e79ff3b2489c5ccd4ca077e7710c5b2c1821b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
