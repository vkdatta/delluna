export const name="text-t-thin";
export const id="dl_dfba808eaa2548b31816";
export const url=new URL("../icons/text-t-thin.svg?v=61ff1c06e724445b09b04853801d7eb91f91b399095146a01df691ccbfcd3835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
