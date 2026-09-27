export const name="google-cardboard-logo-duotone";
export const id="dl_8ba4a03a5eee474aa60a";
export const url=new URL("../icons/google-cardboard-logo-duotone.svg?v=02eecb1f570203101b856242b0e7f92a77824a293242e464341f06f91216e84f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
