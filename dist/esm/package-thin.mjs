export const name="package-thin";
export const id="dl_8f872ad8c9cf4c35bf32";
export const url=new URL("../icons/package-thin.svg?v=93f39fc34cd0f1c7859f973e14368d12c289d151d32f9eb97e4ef376af2d4749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
