export const name="emergency_recording";
export const id="dl_a3829146c89546fd9771";
export const url=new URL("../icons/E/emergency_recording.svg?v=39b5d2c998b0ff3da567040247402e137746e57cdd2acd8829abbee24c331b2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
