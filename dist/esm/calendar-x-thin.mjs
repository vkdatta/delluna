export const name="calendar-x-thin";
export const id="dl_de951042210648db80fa";
export const url=new URL("../icons/calendar-x-thin.svg?v=3cf79c67776ebbbf9b36b115d8c37a0f3af11388b3d64872efb8329ce6c65f33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
