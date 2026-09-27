export const name="lucid_1-brain-circuit";
export const id="dl_1cd7d3b9d7b6428db0e5";
export const url=new URL("../icons/lucid_1-brain-circuit.svg?v=8321b2841580ce277d17da8bf3a7d071341a8a333179d8218da59a41979ce849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
