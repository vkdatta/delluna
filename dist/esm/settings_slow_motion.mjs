export const name="settings_slow_motion";
export const id="dl_09e4b5f4ac497e5dec03";
export const url=new URL("../icons/settings_slow_motion.svg?v=b49703c93b6bb1a660907eb0e16d5f63383dfb2cea0aa233ecef1a69bd1cb3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
