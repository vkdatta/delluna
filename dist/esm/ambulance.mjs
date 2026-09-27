export const name="ambulance";
export const id="dl_ae704a91e8bd4bc6a6a7";
export const url=new URL("../icons/ambulance.svg?v=d163a083e59ff1dbbd2ff50e69aa43af262d443648d11f3fe9defd18d7029e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
