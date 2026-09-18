export const name="settings_voice-fill";
export const id="dl_8a91fdbdbde1472886d0";
export const url=new URL("../icons/S/settings_voice-fill.svg?v=8958dac98b80b4790fd6fa9ba48134d24cf7012752f42ece35a1a888287976c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
