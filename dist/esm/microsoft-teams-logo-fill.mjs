export const name="microsoft-teams-logo-fill";
export const id="dl_6c3b84aa2d2c4a3b89cd";
export const url=new URL("../icons/microsoft-teams-logo-fill.svg?v=7755ca7d9f94c9860e19c2d71f44b799e3548b30aacb323f0d6ac24be2f2a64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
