export const name="military_tech";
export const id="dl_0d872e5006b8580fda1b";
export const url=new URL("../icons/military_tech.svg?v=7bb48ca8c1010a1cc4ece26ed32a9c8f094488b82a9ff76578cbc6ee09e61550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
