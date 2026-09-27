export const name="dev-to-logo-light";
export const id="dl_f018336d920144779794";
export const url=new URL("../icons/dev-to-logo-light.svg?v=e3ab612c742d2a2c2774a6fa344daa75947f0391e87faa7371c4eb9a1e39f950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
