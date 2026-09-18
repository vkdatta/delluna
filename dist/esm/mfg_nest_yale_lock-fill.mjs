export const name="mfg_nest_yale_lock-fill";
export const id="dl_e626cd67f5b746a89b15";
export const url=new URL("../icons/M/mfg_nest_yale_lock-fill.svg?v=cb08afdfd462fdaea911effeb2ad3525e2996435425022216bf18f7e909913f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
