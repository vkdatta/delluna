export const name="view_column-fill";
export const id="dl_868db111799f8d6e9164";
export const url=new URL("../icons/view_column-fill.svg?v=b73afd97740340c6a241da782265c3e3b24cc39f74d81823e44d1b54b608e982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
