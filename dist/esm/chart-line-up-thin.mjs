export const name="chart-line-up-thin";
export const id="dl_9f55444f7be348aa961c";
export const url=new URL("../icons/chart-line-up-thin.svg?v=bf954198742289a2c1b5ce1940aaf4ab1480f8c21c7e963d2a86182d775cb965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
