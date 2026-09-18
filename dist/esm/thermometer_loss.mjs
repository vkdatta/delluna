export const name="thermometer_loss";
export const id="dl_26391af4e3434d3296ef";
export const url=new URL("../icons/thermometer_loss.svg?v=e2ffeb1b9dba8f4575aac22d6eb01304df608856d332edce84ca641248658c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
