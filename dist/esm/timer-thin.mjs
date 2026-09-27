export const name="timer-thin";
export const id="dl_157ccb3d21b31ac596bf";
export const url=new URL("../icons/timer-thin.svg?v=d42a061ebab2b0a968a460a5a44c8079c57b5472f6b556b1e744a2fd619cfd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
