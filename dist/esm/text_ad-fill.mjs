export const name="text_ad-fill";
export const id="dl_abf0f3450fe83743599a";
export const url=new URL("../icons/text_ad-fill.svg?v=e57f741048acbc54113dfecd17ca90ece4756a247254481e14c97027e74debdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
