export const name="calendar-slash-thin";
export const id="dl_d898f3e32f264df8ae73";
export const url=new URL("../icons/calendar-slash-thin.svg?v=abbc2c749a4250e935a9174d04a008aad13533f778200eab6f407792af244f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
