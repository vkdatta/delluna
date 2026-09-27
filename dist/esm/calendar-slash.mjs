export const name="calendar-slash";
export const id="dl_e3df4fc24bfc4d7ca8fa";
export const url=new URL("../icons/calendar-slash.svg?v=ec47c6b56c7ae7bd9e285f230c881aeb8fb8d7308d09890faedc4336427345dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
