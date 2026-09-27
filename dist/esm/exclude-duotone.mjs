export const name="exclude-duotone";
export const id="dl_dcdddade5f244d96ab71";
export const url=new URL("../icons/exclude-duotone.svg?v=9535ef67df540377fc0ccf9cd34adff0dcd75d433489e7f8152114275c81ebde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
