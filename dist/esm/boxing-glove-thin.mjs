export const name="boxing-glove-thin";
export const id="dl_28bfe064fe4b44648c69";
export const url=new URL("../icons/boxing-glove-thin.svg?v=1a78c45668134034cd9f3af65414159fa0f7a57dac48ce5ca1e86c478a14c609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
