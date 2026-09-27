export const name="batch_prediction-fill";
export const id="dl_61a548df7f4ae93dc53b";
export const url=new URL("../icons/batch_prediction-fill.svg?v=f336db801421fdb5ca3a2c11eb18e0127aee6864f5d9d3e160c852e011bdbfa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
