export const name="arrow_upload_progress-fill";
export const id="dl_50feb4df25799d2a8aa1";
export const url=new URL("../icons/arrow_upload_progress-fill.svg?v=ac7f529db4646b6c3a87cd399ca40331aa47f73f296a7a1937ad287e0523184c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
