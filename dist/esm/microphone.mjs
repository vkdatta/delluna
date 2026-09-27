export const name="microphone";
export const id="dl_2ee9613ac90947f5b2da";
export const url=new URL("../icons/microphone.svg?v=72510e5f997917614c641935d1452de804aad06b544d79b213d2458633113e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
