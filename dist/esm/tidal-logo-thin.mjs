export const name="tidal-logo-thin";
export const id="dl_127032acc949181115db";
export const url=new URL("../icons/tidal-logo-thin.svg?v=b06c8bfa605234790bd4e72f918ff31d9230e244fe497cd58936d338ae59492f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
