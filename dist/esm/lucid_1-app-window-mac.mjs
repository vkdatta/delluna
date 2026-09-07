export const name="lucid_1-app-window-mac";
export const id="dl_3e271d22e5b0442e864b";
export const url=new URL("../icons/lucid_1-app-window-mac.svg?v=f9f06e38eddf2b20f0b90d968a8f1b4f9af5171f698b5ae17e343ac369965547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
