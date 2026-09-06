export const name="lucid_1-brain-circuit";
export const id="dl_1cd7d3b9d7b6428db0e5";
export const url=new URL("../icons/lucid_1-brain-circuit.svg?v=1b4aa6072d81e2edc519f39f92cf9d14c7dcd018b603dcf64065d896b43b47f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
