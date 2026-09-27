export const name="exclude-square-light";
export const id="dl_2127b483c182462a8723";
export const url=new URL("../icons/exclude-square-light.svg?v=7eed4b1bcf24263688d5fc8ef5485baa43f863d99dd073947a6c994151bd0b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
