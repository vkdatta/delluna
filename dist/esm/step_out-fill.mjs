export const name="step_out-fill";
export const id="dl_40fdeb78b4f49a13dac9";
export const url=new URL("../icons/step_out-fill.svg?v=f555d6fd55dd3eee63284b78c7b047d5c3d3e695815388296fa8698d8917484b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
