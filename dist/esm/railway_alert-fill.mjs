export const name="railway_alert-fill";
export const id="dl_a3e478ef64991a7b5226";
export const url=new URL("../icons/railway_alert-fill.svg?v=da0958def7c8a09b87bb3bbd6683990a0f18e68bc149e700b8283f880d124f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
