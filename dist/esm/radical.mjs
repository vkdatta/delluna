export const name="radical";
export const id="dl_1f83da303a2940b09e80";
export const url=new URL("../icons/radical.svg?v=f68bbd2d3ba0df9abec9830be4df123f047f8e739795131dcbc915395c081523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
