export const name="settings_voice";
export const id="dl_e341f3e58f0c175c0a61";
export const url=new URL("../icons/settings_voice.svg?v=d9cf7428e25b8f8639872d08385ff1e05b3df5dcbfa327c42b3617a96990e423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
