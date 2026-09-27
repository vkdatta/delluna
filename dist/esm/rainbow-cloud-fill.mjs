export const name="rainbow-cloud-fill";
export const id="dl_734d07da2d584ae69d60";
export const url=new URL("../icons/rainbow-cloud-fill.svg?v=d44e7824f42e56313aac4f1e72c21b39e48e8d361042e0501117f52d5d1b01b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
