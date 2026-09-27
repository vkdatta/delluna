export const name="lucid_3-music-4";
export const id="dl_cac6e68b47fd47279b41";
export const url=new URL("../icons/lucid_3-music-4.svg?v=9b1405ad384daa7f218cc2b3409042b1f7e530ea875a25bdf233f1fc5cdd6dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
