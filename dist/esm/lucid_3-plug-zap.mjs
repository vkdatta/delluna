export const name="lucid_3-plug-zap";
export const id="dl_a8531f1aa1ce41f8a44b";
export const url=new URL("../icons/lucid_3-plug-zap.svg?v=2fbf83fbcd821d77452374f383ee8f6e37d0435c3105bc66c33692e2adc65682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
