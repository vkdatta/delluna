export const name="calendar-slash-bold";
export const id="dl_4e75c57d3dc14e8d9152";
export const url=new URL("../icons/calendar-slash-bold.svg?v=f9fae6dec4253f25c51d76ecfe78d5b8fb889907990c4c2f33ccc31462f0492a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
