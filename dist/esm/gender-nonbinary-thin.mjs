export const name="gender-nonbinary-thin";
export const id="dl_ca4105901eae4206a6df";
export const url=new URL("../icons/gender-nonbinary-thin.svg?v=c2bc1beaf173b21a385796b4c0275829dc2de52ba8dc3550b69349abee7f28fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
