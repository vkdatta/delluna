export const name="power_off-fill";
export const id="dl_8ac7e54d48d19ad77ccd";
export const url=new URL("../icons/power_off-fill.svg?v=e648f0b89089486a0618362bb59802b76bd0ab3f26b2f967638b72d3fb690e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
