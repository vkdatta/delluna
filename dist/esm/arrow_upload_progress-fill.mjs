export const name="arrow_upload_progress-fill";
export const id="dl_0064bd48f2ae39b74504";
export const url=new URL("../icons/arrow_upload_progress-fill.svg?v=12ea18342b3e8b392e44c2c54ffdb2e2076266e3a376750ae43d7465b474a81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
