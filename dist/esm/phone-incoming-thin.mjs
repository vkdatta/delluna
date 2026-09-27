export const name="phone-incoming-thin";
export const id="dl_e19444ecc04e4b628e6a";
export const url=new URL("../icons/phone-incoming-thin.svg?v=c80e9063cc5d1121ca09a234cdc96f568b1e0409224bfb15e94a9dfa125447d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
