export const name="lucid_2-door-closed-locked";
export const id="dl_8a7aeb10189249758321";
export const url=new URL("../icons/lucid_2-door-closed-locked.svg?v=2acc5d2a537f7f3848da1214b6149309407baffaa84ccc4767f25dfaf76dcee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
