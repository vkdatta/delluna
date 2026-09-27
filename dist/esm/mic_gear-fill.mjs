export const name="mic_gear-fill";
export const id="dl_b6152a0291b9ae05cec7";
export const url=new URL("../icons/mic_gear-fill.svg?v=65733a53144b83e3d952ca1a4f68b72321ad537a1d4007ee004084e74389e066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
