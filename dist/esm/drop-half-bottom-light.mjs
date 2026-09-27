export const name="drop-half-bottom-light";
export const id="dl_2e4850f890ea47e3b9fc";
export const url=new URL("../icons/drop-half-bottom-light.svg?v=98d786cc6dc9b762ac6053c73351710bc9b5d4b4688fb3fa56c090996a65462c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
