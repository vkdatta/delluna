export const name="settings_voice";
export const id="dl_6fb5614475afbec336c9";
export const url=new URL("../icons/settings_voice.svg?v=28fb3e5f1bd18020137066ca128d03b1e2518c9a446dd5025ca755e94d98c5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
