export const name="tab";
export const id="dl_92ba4eefe6866aedbdc5";
export const url=new URL("../icons/tab.svg?v=d56109cbec1f02489bb4d2adb19f80c3ff65ab23094cc654de97ecd253e7091d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
