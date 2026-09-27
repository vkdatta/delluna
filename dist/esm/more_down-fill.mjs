export const name="more_down-fill";
export const id="dl_3f4a31e548e76a7626f6";
export const url=new URL("../icons/more_down-fill.svg?v=2e9f30c5c0211565911aff96602041d48db57193d98ab9af90ff7ad9a30dadc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
