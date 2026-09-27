export const name="file-csv-fill";
export const id="dl_4032fab7d67d46ef90fe";
export const url=new URL("../icons/file-csv-fill.svg?v=f05443a53a8c57cf22ebd582921a1b2f331ff7ae4105b39cffc2840174f24150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
