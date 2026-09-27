export const name="notebook-bold";
export const id="dl_a85568ff5bf44f12a286";
export const url=new URL("../icons/notebook-bold.svg?v=72a7aa127859272901595f5c9bbdf863d72b7c2fe6a90bf7b0e2e02462367922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
