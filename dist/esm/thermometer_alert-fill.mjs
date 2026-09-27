export const name="thermometer_alert-fill";
export const id="dl_7cff8dbbf3c54a202fad";
export const url=new URL("../icons/thermometer_alert-fill.svg?v=1f51ec20cf4b4404d50e092191ac069c8935f1267291865d01d3b9b16f34154f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
