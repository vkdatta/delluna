export const name="hourglass-high-fill";
export const id="dl_01eecd5bb5e6463889e0";
export const url=new URL("../icons/hourglass-high-fill.svg?v=950772e0f0495e6fbe6e75d0cf8ffb6e0d7ef57ffd381680e16d974432d6f14f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
