export const name="railway_alert_2-fill";
export const id="dl_e364e3b9c455b9cdbb2e";
export const url=new URL("../icons/railway_alert_2-fill.svg?v=c066d8600ba500dc3cf333f96857a372f90652e88980af83155f68d7f175adf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
