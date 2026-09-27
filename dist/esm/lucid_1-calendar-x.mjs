export const name="lucid_1-calendar-x";
export const id="dl_4ef8d3d005fc4c23a934";
export const url=new URL("../icons/lucid_1-calendar-x.svg?v=555cbf3782e876b154031cc04cf05fdf5c412e83d77d8ec4c4baaed3fdb03ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
