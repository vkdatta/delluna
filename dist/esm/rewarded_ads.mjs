export const name="rewarded_ads";
export const id="dl_9701c4ef9881d96641f6";
export const url=new URL("../icons/rewarded_ads.svg?v=262bff9024afd793f9405a2d097a772ce18fc4e38187fa2b6327a6a5868e1c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
