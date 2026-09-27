export const name="arrow-bend-double-up-right-duotone";
export const id="dl_5f3ac37da5f34919ab5d";
export const url=new URL("../icons/arrow-bend-double-up-right-duotone.svg?v=6f39a666748c224078456200ed8bff2648882a8904327a776aefaf489aeba00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
