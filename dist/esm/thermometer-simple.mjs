export const name="thermometer-simple";
export const id="dl_306b6320706e2f907744";
export const url=new URL("../icons/thermometer-simple.svg?v=5269932fea875d08682c1f8b2cfe4353862c6beb5dd324b7a538cf8f5b291ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
