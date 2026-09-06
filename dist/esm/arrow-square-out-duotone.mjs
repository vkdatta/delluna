export const name="arrow-square-out-duotone";
export const id="dl_d026527688b44a72b277";
export const url=new URL("../icons/arrow-square-out-duotone.svg?v=167643baf91c9a32e0ebfb85ed0549e757409f7b51238a594bf643820e791565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
