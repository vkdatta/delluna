export const name="settings_voice";
export const id="dl_e0d20dd9fc2f7fce287a";
export const url=new URL("../icons/settings_voice.svg?v=7ecc3ba5fc8b7fa09a1182cd71ccabac26511608c0fb49e167f69d0614ebcf4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
