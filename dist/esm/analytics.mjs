export const name="analytics";
export const id="dl_cf1477ef7a0f444090a9";
export const url=new URL("../icons/A/analytics.svg?v=2f9968f04b6a818741c0416656d1e64e6b4ee09ca03ee9355aa57cf6fd2e7c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
