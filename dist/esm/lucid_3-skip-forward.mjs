export const name="lucid_3-skip-forward";
export const id="dl_a0d5398b50804cddbd50";
export const url=new URL("../icons/lucid_3-skip-forward.svg?v=dd2341f2c1e1fc8755b4a66ca1f0e2e9f71dccc1b8b71ed41836401bf7cd1192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
