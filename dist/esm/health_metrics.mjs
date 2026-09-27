export const name="health_metrics";
export const id="dl_87e74d881c8055e11454";
export const url=new URL("../icons/health_metrics.svg?v=ee24228b36ff719b600f023a99fd2aa5d1f1765bdd1ba206f5fd5af3bfd84846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
