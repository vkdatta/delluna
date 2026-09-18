export const name="settings_slow_motion";
export const id="dl_c71752e2bd1d439aa185";
export const url=new URL("../icons/settings_slow_motion.svg?v=5be7e11c3dfb0bf8756e0d9894e46916e6f07450f4368a36993b96d46b0be240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
