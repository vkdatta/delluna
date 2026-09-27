export const name="chart_data";
export const id="dl_3312f6870a1b5b01e627";
export const url=new URL("../icons/chart_data.svg?v=067ec6815991af294978b35afae796f02b1ed47f5bb712e1371fe4bd741dda04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
