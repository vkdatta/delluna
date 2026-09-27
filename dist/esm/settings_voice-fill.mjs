export const name="settings_voice-fill";
export const id="dl_95d8f88ed8ef10cbae4d";
export const url=new URL("../icons/settings_voice-fill.svg?v=aeb53649ebd6a9c5e42395f28ca661277daa5e94fc5f0486069bc42ed7c99c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
