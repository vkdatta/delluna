export const name="conveyor_belt";
export const id="dl_f737d2f837484dc886a6";
export const url=new URL("../icons/conveyor_belt.svg?v=56c1dc823545a64fba36658538495f0dfb141c2ab67d488e2b49cdd4e5e11d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
