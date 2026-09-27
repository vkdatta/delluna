export const name="arrow_upload_progress-fill";
export const id="dl_6af1ee68473ac8b63ff3";
export const url=new URL("../icons/arrow_upload_progress-fill.svg?v=d9c2a64bab1d55fa19dba8a8fb779b17ce471117358831b680f269cab4f1d1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
