export const name="lucid_1-app-window-mac";
export const id="dl_3e271d22e5b0442e864b";
export const url=new URL("../icons/lucid_1-app-window-mac.svg?v=64e26e395f3691b8874415deaba25a3e33068d54b965cdf72cbf27f17cb26976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
