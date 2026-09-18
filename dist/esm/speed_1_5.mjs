export const name="speed_1_5";
export const id="dl_9ba3c381546948138ed1";
export const url=new URL("../icons/speed_1_5.svg?v=93ae1cc08cec17908607af2374b15082490dc032dbab02c90dde80368fa625ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
