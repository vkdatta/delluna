export const name="clock-fill";
export const id="dl_a366325497464c7eba43";
export const url=new URL("../icons/clock-fill.svg?v=6d7876ea3522de658115fe3bd986203a2f6ae797cfde9d7e458d00409c16ebfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
