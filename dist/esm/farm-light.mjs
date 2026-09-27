export const name="farm-light";
export const id="dl_799b84e4d7a9499998f8";
export const url=new URL("../icons/farm-light.svg?v=0737a757966304fa82a22678de4f6ae798b6b8f3993dda626f493c43cabda136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
