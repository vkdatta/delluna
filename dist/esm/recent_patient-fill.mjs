export const name="recent_patient-fill";
export const id="dl_511d496f155463695c14";
export const url=new URL("../icons/recent_patient-fill.svg?v=92a5c2a40d810d523682a039de52f89440752e19632ccfd031beb60f712fb03a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
