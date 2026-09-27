export const name="volume_down-fill";
export const id="dl_c6bb284ea80dfdf0d56e";
export const url=new URL("../icons/volume_down-fill.svg?v=0cf98e0d21a0eeda14a6d814f77b3697758ccb5ed4e31f7bf6f2a061da8d5fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
