export const name="battery-vertical-low-thin";
export const id="dl_bacff225d219493cb39a";
export const url=new URL("../icons/battery-vertical-low-thin.svg?v=0db0f34a89242657a52a72835162931bce1f71280e90bbf76769c595446fb2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
