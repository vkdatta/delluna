export const name="tidal-logo-thin";
export const id="dl_61289d151cedaedb541d";
export const url=new URL("../icons/tidal-logo-thin.svg?v=28f5716b8cac7e856e1ed669a909381d522face2fa4a06ef5549d9485182826d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
