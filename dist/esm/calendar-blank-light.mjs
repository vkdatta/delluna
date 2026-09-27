export const name="calendar-blank-light";
export const id="dl_2f2b9cb2f6a94c938085";
export const url=new URL("../icons/calendar-blank-light.svg?v=e486ba4d5381797973e6edf56c480e868f6618df035e2a472d529a454b081ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
