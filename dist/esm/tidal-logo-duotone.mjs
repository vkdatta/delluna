export const name="tidal-logo-duotone";
export const id="dl_1f3005be4a0bb0e8c836";
export const url=new URL("../icons/tidal-logo-duotone.svg?v=8df2f33344976964f9b32ac710e33ac8f4e54e8b8d28579c888991a5ab23c361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
