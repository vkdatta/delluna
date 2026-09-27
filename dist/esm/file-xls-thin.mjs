export const name="file-xls-thin";
export const id="dl_3795bf58f72e4c558384";
export const url=new URL("../icons/file-xls-thin.svg?v=3f1e9557abc6a03661032e24fce3ee7a8d7c875dfefaf6055f998731e0abc430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
