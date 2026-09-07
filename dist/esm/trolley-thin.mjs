export const name="trolley-thin";
export const id="dl_8f3d870bc2c04ac1ba32";
export const url=new URL("../icons/T/trolley-thin.svg?v=c8e423dcc01e875149020b6075738446b82bc4af2e4464b33453a4453b25e772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
