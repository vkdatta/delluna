export const name="conveyor_belt";
export const id="dl_d9bbaeafbd3d1f22f06f";
export const url=new URL("../icons/conveyor_belt.svg?v=687dd0de9bdc8aa55e9e667d9e36004d2ba5416dc9261e78ce12fb72f54a9fb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
