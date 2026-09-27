export const name="medium-logo";
export const id="dl_158e8527811a4cdc8b64";
export const url=new URL("../icons/medium-logo.svg?v=ac8bb0621e97103250c44ac0a323d98d12384cc59fcc982b087fb29d6ccad9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
