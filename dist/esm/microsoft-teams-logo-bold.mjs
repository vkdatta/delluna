export const name="microsoft-teams-logo-bold";
export const id="dl_665c1c02d9b0487283b0";
export const url=new URL("../icons/microsoft-teams-logo-bold.svg?v=f39631fc093f04f5df1f403d03b2bbd3675f7ad42b93825d99d22b07ba02e60a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
