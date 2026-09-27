export const name="clarify";
export const id="dl_d1980a4ae86883a58971";
export const url=new URL("../icons/clarify.svg?v=c66fe5d5af57b989d545bd51325117cf10cb6a55af680eaaf72b75cc4a16884f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
