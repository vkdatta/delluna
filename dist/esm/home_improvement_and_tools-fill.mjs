export const name="home_improvement_and_tools-fill";
export const id="dl_eabb30af260c410c97b2";
export const url=new URL("../icons/home_improvement_and_tools-fill.svg?v=d2485f604dae8212efdea11d1e30b75a9db567cce081c7986808eab402aa18bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
