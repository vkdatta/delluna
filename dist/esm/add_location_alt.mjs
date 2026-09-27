export const name="add_location_alt";
export const id="dl_c4a98b56c69c7572ed60";
export const url=new URL("../icons/add_location_alt.svg?v=92084a6566153f58bb3ef1ec64f9e5dafb26fa711150bccb2052d3270d8d5fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
