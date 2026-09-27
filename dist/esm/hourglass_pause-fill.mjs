export const name="hourglass_pause-fill";
export const id="dl_01192297f7b94d195326";
export const url=new URL("../icons/hourglass_pause-fill.svg?v=c5b3081702b65edece32069f2845362673a67e53f0e8836b6eb4777ffea2c016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
