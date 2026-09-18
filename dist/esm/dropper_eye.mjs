export const name="dropper_eye";
export const id="dl_0a1432f191bd4b3db8d7";
export const url=new URL("../icons/dropper_eye.svg?v=a174abf25830ac373408391ae294414131e998c77ae93f35e6ca8c2ae5e73c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
