export const name="speaker-slash";
export const id="dl_b04ad0c0069a9419ad55";
export const url=new URL("../icons/speaker-slash.svg?v=352ac16c0cd9bfcf79c0b12c38e610f07cbaefea2cabeb9378f998220d4d971e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
