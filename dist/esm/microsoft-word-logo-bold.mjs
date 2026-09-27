export const name="microsoft-word-logo-bold";
export const id="dl_9558eac3c4c34cbe8556";
export const url=new URL("../icons/microsoft-word-logo-bold.svg?v=d2096a278bdc35bac0a203a5c8fd4bb23671a6cd150f8b689a0fd3c3e1667f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
