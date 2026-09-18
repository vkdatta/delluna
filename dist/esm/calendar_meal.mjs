export const name="calendar_meal";
export const id="dl_b03c85a11bd14a2ab45a";
export const url=new URL("../icons/calendar_meal.svg?v=c8240e70a1f33158e669500b415ee60f3c2cf57d231f5d7507e9addc5b9056e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
