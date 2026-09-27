export const name="triangle-thin";
export const id="dl_5bb0fb593bea2e04743a";
export const url=new URL("../icons/triangle-thin.svg?v=53c474d22a98799b483a8dd8ad5fbee3d699d4c900b25ce2f3a10cb5e2c2b816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
