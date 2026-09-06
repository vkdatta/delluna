export const name="recycle";
export const id="dl_4e4473a81a1742d3b4c7";
export const url=new URL("../icons/recycle.svg?v=85e74a2e58dae5cb178dc23e73216edad052da022c401c676a294245c6093965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
