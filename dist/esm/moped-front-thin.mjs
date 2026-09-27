export const name="moped-front-thin";
export const id="dl_d63eed15e156498ea844";
export const url=new URL("../icons/moped-front-thin.svg?v=78fd686ed23f40bed386824d7e22ea6002735a5909ccc1c37df0e5db54cdf9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
