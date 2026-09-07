export const name="microsoft-teams-logo-bold";
export const id="dl_665c1c02d9b0487283b0";
export const url=new URL("../icons/microsoft-teams-logo-bold.svg?v=4b948da87c93e92d912af152af70c09d60191c6c4b2a400bcaa1153d265cf668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
