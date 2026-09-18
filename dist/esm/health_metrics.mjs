export const name="health_metrics";
export const id="dl_430a73e41b2a4bd2b5b0";
export const url=new URL("../icons/H/health_metrics.svg?v=153a034091c496711c1a8b7fb0acb8c13bc92a487ae891e4605a537022423e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
