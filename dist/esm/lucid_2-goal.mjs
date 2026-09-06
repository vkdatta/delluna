export const name="lucid_2-goal";
export const id="dl_75e35904337946f2b237";
export const url=new URL("../icons/lucid_2-goal.svg?v=eace704a213c5c41751911177d71ae438b5e56d3035107e6a18ba000d5a3ae94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
