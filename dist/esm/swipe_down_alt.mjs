export const name="swipe_down_alt";
export const id="dl_fcb1920c80fdc7d2f0d4";
export const url=new URL("../icons/swipe_down_alt.svg?v=abc969086ea2afc434e58875bc8d4bd1ea04055db55287c20df7c01d25e31f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
