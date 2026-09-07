export const name="volleyball-thin";
export const id="dl_f196d291501e40b58629";
export const url=new URL("../icons/V/volleyball-thin.svg?v=c23a569200e8f3c1181d823ceb3b24d9764f1325fe318b26419e63db6f471741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
