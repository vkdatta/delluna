export const name="conveyor_belt";
export const id="dl_f27844b7f4258a58e8f5";
export const url=new URL("../icons/conveyor_belt.svg?v=80642f422f3599c9b74e2b5007cf4e2279d5d692639bfa6b3ab1614b87d25054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
