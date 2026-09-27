export const name="chart-line-up-thin";
export const id="dl_9f55444f7be348aa961c";
export const url=new URL("../icons/chart-line-up-thin.svg?v=872c6ccdc145d4ce15171b5463fe782e919414e5d4c9335db6caf63b18326bee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
