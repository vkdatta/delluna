export const name="lucid_1-calendar-x";
export const id="dl_4ef8d3d005fc4c23a934";
export const url=new URL("../icons/lucid_1-calendar-x.svg?v=85260412572a2feeabb3de78001e0dea8e428f8f29590d5bd4f3aec375beeb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
