export const name="downhill_skiing-fill";
export const id="dl_04ec9cd277139025e60c";
export const url=new URL("../icons/downhill_skiing-fill.svg?v=af3fdfdae941c12b21b155155dd6f13df75cb11347178008348187805f8f93ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
