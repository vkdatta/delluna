export const name="mobile_share";
export const id="dl_eb9e6674e8ff405094c9";
export const url=new URL("../icons/mobile_share.svg?v=dc38d697e5ca0f14af7bf320898e004b84cc5990c49e43f193e8b2e2802e39c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
