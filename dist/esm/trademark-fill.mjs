export const name="trademark-fill";
export const id="dl_747d9260540e86bff592";
export const url=new URL("../icons/trademark-fill.svg?v=2d409e474b93962eeaa8d32c87288fced2f111ef0e352bc7bfa04cdbf84ea6ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
