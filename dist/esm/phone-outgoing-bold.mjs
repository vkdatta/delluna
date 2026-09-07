export const name="phone-outgoing-bold";
export const id="dl_db25f6b45700428eb37b";
export const url=new URL("../icons/phone-outgoing-bold.svg?v=91bfc78d77501c803921d2ae20ca417fa2f0b42b53b159ff6ef5acef36020a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
