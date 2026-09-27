export const name="signal_cellular_nodata-fill";
export const id="dl_ba7a04e9f8fc0352440a";
export const url=new URL("../icons/signal_cellular_nodata-fill.svg?v=a34ebdd3afc13cbac8bc476bd24213e25fbdfc2376d685e31e2b873ed57b276f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
