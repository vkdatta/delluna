export const name="lucid_3-parking-meter";
export const id="dl_fa93366d66eb43288a8e";
export const url=new URL("../icons/lucid_3-parking-meter.svg?v=867b5b4612e6b06d197b19848a051210f8e4fe8259a448beb8c13b4853a54125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
