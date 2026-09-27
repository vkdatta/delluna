export const name="microsoft-teams-logo-fill";
export const id="dl_6c3b84aa2d2c4a3b89cd";
export const url=new URL("../icons/microsoft-teams-logo-fill.svg?v=60a99b19132b04d21c22aab5b9c1e14401810cc243b2f28efe0356e7db583228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
