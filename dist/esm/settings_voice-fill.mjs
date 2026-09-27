export const name="settings_voice-fill";
export const id="dl_52d0613664d4a2d9cf48";
export const url=new URL("../icons/settings_voice-fill.svg?v=58dacb6c77abf57c70d15bb18acf8c80c6c8fba5905d38e519dbf82074c910bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
