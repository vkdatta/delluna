export const name="hand_meal-fill";
export const id="dl_477473f671bc5fbcc300";
export const url=new URL("../icons/hand_meal-fill.svg?v=0f97d05f69c9e91d87fd12c84fcdafbed2162b3c224412b8e66b33742fbb2cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
