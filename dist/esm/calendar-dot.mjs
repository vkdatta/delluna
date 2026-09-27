export const name="calendar-dot";
export const id="dl_a4e20c77685f4f98a123";
export const url=new URL("../icons/calendar-dot.svg?v=af56eb637f24c899ab8e9230e51eb38554b3c0a1926db3c6c4ad06ae8bc97ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
