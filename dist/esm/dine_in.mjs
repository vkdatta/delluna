export const name="dine_in";
export const id="dl_21ce68e23f21db46ac74";
export const url=new URL("../icons/dine_in.svg?v=aa3ebbf85c0c4dd0bf6d03828bf14ba79bd4b1ef62304717c94863d659c880e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
