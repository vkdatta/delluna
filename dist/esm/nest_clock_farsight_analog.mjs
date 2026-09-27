export const name="nest_clock_farsight_analog";
export const id="dl_3d8b14e1f57ee6d41070";
export const url=new URL("../icons/nest_clock_farsight_analog.svg?v=24a4dce434504c1e8e929330ea36f700be38f337724e5b750fd07ce42d8e0a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
