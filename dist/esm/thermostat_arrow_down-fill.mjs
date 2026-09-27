export const name="thermostat_arrow_down-fill";
export const id="dl_46dbfcc219d1a780585a";
export const url=new URL("../icons/thermostat_arrow_down-fill.svg?v=f617c1b8a2e23414f21bce0af689ea45bbeb4d7c9604e3e85bda9958eb40ebb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
