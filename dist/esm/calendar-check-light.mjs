export const name="calendar-check-light";
export const id="dl_cc96e63847e04f2eac4b";
export const url=new URL("../icons/calendar-check-light.svg?v=b87a0c83f58ad28ed7346ce54b02f28dc8aeda5a8d6ebfa40bc59502ea0545aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
