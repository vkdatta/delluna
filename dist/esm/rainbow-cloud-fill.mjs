export const name="rainbow-cloud-fill";
export const id="dl_734d07da2d584ae69d60";
export const url=new URL("../icons/rainbow-cloud-fill.svg?v=91941cd9461daaa049be7cf15d814b718d6e00a952278f93afd027bd03086c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
