export const name="file_upload_off-fill";
export const id="dl_79cc0f6c9e2f79c115e8";
export const url=new URL("../icons/file_upload_off-fill.svg?v=2a322a3b945a7695c80f68ff7e5ed981ffee217ee7e66835c2807c3908749f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
