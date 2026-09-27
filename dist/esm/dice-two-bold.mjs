export const name="dice-two-bold";
export const id="dl_69192a9bf8f64760beb8";
export const url=new URL("../icons/dice-two-bold.svg?v=26cb3ba4e201b556093099dea7d2a743c350a9918df3b8f7bd47e2254374182b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
