export const name="webcam-slash-fill";
export const id="dl_9267796d387b490dabee";
export const url=new URL("../icons/W/webcam-slash-fill.svg?v=c6b12c1bcf835456c1b34ccecabd8dc696ee9862bb0d342208b96a253b7137d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
