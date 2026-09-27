export const name="calendar-blank-duotone";
export const id="dl_49a711eb13664704a860";
export const url=new URL("../icons/calendar-blank-duotone.svg?v=96820de3ac140a1198e2feb022d8f084e662e3ebc3099988f66c547b70054400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
