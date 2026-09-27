export const name="flower-lotus-fill";
export const id="dl_f2cb797fc6b340958f0b";
export const url=new URL("../icons/flower-lotus-fill.svg?v=8b0782cbbb19ec1fd294cc82399b688a6104490f3ff730880242700cfe6ff909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
