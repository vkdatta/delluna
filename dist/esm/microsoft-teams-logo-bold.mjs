export const name="microsoft-teams-logo-bold";
export const id="dl_665c1c02d9b0487283b0";
export const url=new URL("../icons/microsoft-teams-logo-bold.svg?v=7e19ac3f317a87612f194e7329644ac4ae95e03d092f83ee39da2ac91de55589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
