export const name="arrow-square-out-duotone";
export const id="dl_d026527688b44a72b277";
export const url=new URL("../icons/arrow-square-out-duotone.svg?v=e06aee229887371454877cfb0fc67cad83b6ec95847672a0c53b10e87b7e7852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
