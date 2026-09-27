export const name="escalator-down-bold";
export const id="dl_3a1039ab22164137b794";
export const url=new URL("../icons/escalator-down-bold.svg?v=c52561f54d0ab1a9b79e19cf2f31d81eb9df9fa717fc3f35fff4b9227c89109e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
