export const name="speed_1_75-fill";
export const id="dl_9e4009450968ac57863d";
export const url=new URL("../icons/speed_1_75-fill.svg?v=28b7114b773c2117145f46e84e604e9a314785899b6de2fd6b46fe22d312c96a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
