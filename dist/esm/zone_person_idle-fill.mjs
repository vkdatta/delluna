export const name="zone_person_idle-fill";
export const id="dl_17091da5e813cec03ebf";
export const url=new URL("../icons/zone_person_idle-fill.svg?v=995521883209b5a1012acfc5f233f5488346e8afcade9b772c1a015d313ffa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
