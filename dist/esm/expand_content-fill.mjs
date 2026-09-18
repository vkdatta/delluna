export const name="expand_content-fill";
export const id="dl_56ce957352a948f0a1f7";
export const url=new URL("../icons/expand_content-fill.svg?v=73d2a7fe24c05b51cf8d3efffee806bbc8da2c7e743e02607f221eb15f374410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
