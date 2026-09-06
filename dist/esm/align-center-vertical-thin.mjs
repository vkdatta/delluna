export const name="align-center-vertical-thin";
export const id="dl_3a2ad89180aa4095be17";
export const url=new URL("../icons/align-center-vertical-thin.svg?v=57255eb342719a82f3d28a263f14ab530bab68582c392b8c88c0f5b630a595ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
