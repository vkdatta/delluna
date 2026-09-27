export const name="arrow-u-down-right";
export const id="dl_a696153ceb6b465fa9c9";
export const url=new URL("../icons/arrow-u-down-right.svg?v=3690e08ff08da490dabae7cc756d1f7b8edde62a19f0056bee793ec0a7ccd007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
