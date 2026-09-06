export const name="calendar-blank-duotone";
export const id="dl_49a711eb13664704a860";
export const url=new URL("../icons/calendar-blank-duotone.svg?v=7749f48b233c75868ce25af38c537e4b60a44a87681c5b9b2cde6ed3e89f3acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
