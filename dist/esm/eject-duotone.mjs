export const name="eject-duotone";
export const id="dl_cce11df114754e99ad2a";
export const url=new URL("../icons/eject-duotone.svg?v=da07ed928173488efe87c83461c871ad3c4a70f6f62e43ce2253ccf07114bea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
