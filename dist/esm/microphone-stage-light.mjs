export const name="microphone-stage-light";
export const id="dl_358f698b3e75433fa121";
export const url=new URL("../icons/microphone-stage-light.svg?v=ad83dfc3c1b9964bf758cdfa48a50eaf4f41ec0ea0ce8ec7f2f5a9052ccb5b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
