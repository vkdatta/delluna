export const name="lucid_1-brain-circuit";
export const id="dl_1cd7d3b9d7b6428db0e5";
export const url=new URL("../icons/lucid_1-brain-circuit.svg?v=e93e8b9c4d381d6f244cf71bc7be391dab5aaac7b0a1c0b4a097a7b144124f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
