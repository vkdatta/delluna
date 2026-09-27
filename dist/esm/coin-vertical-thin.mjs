export const name="coin-vertical-thin";
export const id="dl_eda796eafde0403db215";
export const url=new URL("../icons/coin-vertical-thin.svg?v=8ac1bd9997d09da800a75d3cb85efcb42eb4ac0294e3547248221bb21b4fa1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
