export const name="info-bold";
export const id="dl_5ee9aa97abfa4514aa59";
export const url=new URL("../icons/info-bold.svg?v=5a18ba9559549fece3ede64a2f2d03ed4dc65be28ce881138081f5cf32ab5dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
