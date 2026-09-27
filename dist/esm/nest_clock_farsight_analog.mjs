export const name="nest_clock_farsight_analog";
export const id="dl_a13e540a7245588f3467";
export const url=new URL("../icons/nest_clock_farsight_analog.svg?v=1f2646553dc13963d8bd9ae35981a614a9ef4fc024ce1d79eb03759779a07e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
