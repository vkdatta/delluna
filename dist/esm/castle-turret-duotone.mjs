export const name="castle-turret-duotone";
export const id="dl_7f62e77bb4574b3b9ad2";
export const url=new URL("../icons/castle-turret-duotone.svg?v=012aeb510fdd98380e1db77f1791216a9dc248f3b8d4815917c557887f43d0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
