export const name="step_into-fill";
export const id="dl_c4ceee72ea25c4f07ca9";
export const url=new URL("../icons/step_into-fill.svg?v=e826c1fc8aa93638908f991a863eb6eb33b355015b967caa604568da45461a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
