export const name="lucid_1-app-window-mac";
export const id="dl_3e271d22e5b0442e864b";
export const url=new URL("../icons/lucid_1-app-window-mac.svg?v=cd34db519bc22afc7c3ffc7cf68d4d1d1ae6fe555e06b3ae08fb9ec97dd57d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
