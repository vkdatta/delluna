export const name="patreon-logo-bold";
export const id="dl_884886fb67444a418136";
export const url=new URL("../icons/patreon-logo-bold.svg?v=79dd264da70eadae607524b116b928dd6c8e826ee3b90bf4a952fdcc01def173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
