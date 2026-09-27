export const name="settings_slow_motion";
export const id="dl_8a3290a957ea6e050a3b";
export const url=new URL("../icons/settings_slow_motion.svg?v=d62f022745e09eddff0bf2a2e9b250284a8fc5a7588394b1c6bb46b838df053b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
