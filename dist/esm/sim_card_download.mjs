export const name="sim_card_download";
export const id="dl_4100d21b46c1ee67d175";
export const url=new URL("../icons/sim_card_download.svg?v=94ce5379fb7246e8bddf204a2b6e04c2fa34bb02e68c3a21a4a306ad0f93267e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
