export const name="safety_check_off-fill";
export const id="dl_1b5f3e79561a06366c97";
export const url=new URL("../icons/safety_check_off-fill.svg?v=ebd64d76a43de71f2e1b53e99c2aae456095efef506635727c00e8ecee0758b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
