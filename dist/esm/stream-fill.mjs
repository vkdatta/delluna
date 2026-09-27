export const name="stream-fill";
export const id="dl_4403b98c4801e2fc8cdb";
export const url=new URL("../icons/stream-fill.svg?v=334e72358dc48860ba29de91d989223d9ebf3ece933860f10968dfc04e03915a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
