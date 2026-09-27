export const name="destruction-fill";
export const id="dl_53e2b9fa2c5cecf09209";
export const url=new URL("../icons/destruction-fill.svg?v=16d383eec4231e1e556d988e6f96568841954de2c21f57a893302fef76946fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
