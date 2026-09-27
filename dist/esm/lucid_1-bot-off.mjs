export const name="lucid_1-bot-off";
export const id="dl_e5b22799c90d40dc8ffe";
export const url=new URL("../icons/lucid_1-bot-off.svg?v=531a04043115d4911d2a10dfb04d0cfcf7281564c4da9375495354ee467baed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
